const path = require('path');
const fs = require('fs');
const { fork } = require('child_process');
const { path_to_core, path_to_api } = require('./config');

/**
 * @description - Parses the docs from core and stores json data in 'parsed-docs.json'
 *    will exclude the following :
 *    - anything from the 'interactors/Integrations' directory
 *    - interactors that do not include the @memberof Interactors line
 *    - interactors that are not mapped to a route in api4
 */
const parseDocs = async () => {
  const jsdoc_path = path.resolve(`${__dirname}/../node_modules/.bin/jsdoc`);
  const args = [
    '--template',
    './node_modules/jsdoc-json',
    '--destination',
    `${__dirname}/parsed-docs.json`,
    '--recurse',
    `${path_to_core}/src/interactors`
  ];

  await new Promise((res, rej) => {
    const sub_proc = fork(jsdoc_path, args);
    sub_proc.on('error', rej);
    sub_proc.on('exit', res);
  });

  const { docs: parsed_docs } = require('./parsed-docs.json');
  const api_routes = require(`${path_to_api}/routes/routes.json`);

  const filtered_parsed_docs = parsed_docs.reduce((acc, doc) => {
    if(!doc.meta) {
      return acc;
    }

    const { name: interactor_name } = path.parse(doc.meta.filename);
    const route = Object.keys(api_routes).find(key => api_routes[key] == interactor_name);
    if(!route) {
      return acc;
    }

    const split_path = doc.meta.path.split('/');
    if(split_path.includes('Integrations')) {
      return acc;
    }

    const entity_name = split_path[split_path.length - 1];
    const populated_meta = {
      ...doc.meta,
      route,
      entity_name,
      interactor_name
    };
    return [ ...acc, { ...doc, meta: populated_meta } ];
  }, []);

  fs.writeFileSync(`${__dirname}/parsed-docs.json`, JSON.stringify({ docs: filtered_parsed_docs }, null, '\t'));
}

parseDocs()
.then(() => process.exit())
.catch(e => {
  console.log(e);
  process.exit();
});

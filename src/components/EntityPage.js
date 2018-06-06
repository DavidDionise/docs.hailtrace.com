import React from 'react';
import { Typography, Divider } from 'mui';
import { splitCamelCase } from 'utils';
import docs_data from 'docs-data';
import { InteractorDocs } from 'components';

class EntityPage extends React.Component {
  render() {
    const pathname = location.pathname.substr(1);
    const interactor_docs = docs_data.docs.filter(doc => {
      return doc.meta.entity_name == pathname;
    });

    return (
      <div style={{ padding: '100px 0 0 200px' }}>
        <Typography variant='display2' style={{ marginBottom: '20px' }}>
          {splitCamelCase(pathname, true)}
        </Typography>
        <Divider />
        {interactor_docs.map(interactor => <InteractorDocs docs={interactor} />)}
      </div>
    );
  }
}

export default EntityPage;

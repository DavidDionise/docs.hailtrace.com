import React from 'react';
import _ from 'lodash';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';
import { App, EntityPage } from 'components';
import docs_data from 'docs-data';

class Routes extends React.Component {
  render() {
    const entities = _.uniq(
      docs_data.docs.map(doc => doc.meta.entity_name)
    );

    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='/:entity_name' component={EntityPage} />
        </Route>
      </Router>
    );
  }
}

export default Routes;

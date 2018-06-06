import React from 'react';
import _ from 'lodash';
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
} from 'mui';
import { ExpandLess, ExpandMore } from 'mui-icons';
import { InteractorsList } from 'components';
import docs_data from 'docs-data';

class EntitiesList extends React.Component {
  render() {
    const entities = _.uniq(
      docs_data.docs.map(elem => elem.meta.entity_name)
    );

    return (
      <div>
      {entities.map(entity_name => {
        return (
          <div key={entity_name}>
            <ListItem
              button
              onClick={() => this.props.setSelectedEntity(entity_name)}
              >
              <ListItemText>{entity_name}</ListItemText>
              {this.props.selected_entity == entity_name ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.props.selected_entity == entity_name}>
              <InteractorsList entity_name={entity_name} />
            </Collapse>
          </div>
        );
      })}
      </div>
    );
  }
}

export default EntitiesList;

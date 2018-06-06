import React from 'react';
import { List, ListItem, ListItemText } from 'mui';
import docs_data from 'docs-data';

class InteractorsList extends React.Component {
  render() {
    const interactor_docs = docs_data.docs.filter(data => {
      return data.meta.entity_name == this.props.entity_name;
    });

    return (
      <List>
        {interactor_docs.map(interactor_doc => {
          return (
            <ListItem key={interactor_doc.meta.interactor_name} button>
              <ListItemText>{interactor_doc.meta.interactor_name}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default InteractorsList;

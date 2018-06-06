import React from 'react';
import { Drawer } from 'mui';
import { EntitiesList } from 'components';

class SidebarLeft extends React.Component {
  render() {
    return (
      <Drawer
        anchor='left'
        open={this.props.sidebar_left_open}
        onClose={this.props.toggleSidebarLeftOpen}
        >
        <EntitiesList
          setSelectedEntity={this.props.setSelectedEntity}
          selected_entity={this.props.selected_entity}
        />
      </Drawer>
    );
  }
}

export default SidebarLeft;

import React from 'react';
import { browserHistory } from 'react-router';
import { Header, SidebarLeft } from 'components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar_left_open: false,
      selected_entity: ''
    };

    this.toggleSidebarLeftOpen = this.toggleSidebarLeftOpen.bind(this);
    this.setSelectedEntity = this.setSelectedEntity.bind(this);
  }

  toggleSidebarLeftOpen() {
    this.setState({ sidebar_left_open: !this.state.sidebar_left_open });
  }

  setSelectedEntity(entity_name) {
    if(this.state.selected_entity == entity_name) {
      this.setState({ selected_entity: '' });
    }
    else {
      this.setState({ selected_entity: entity_name });
    }

    browserHistory.push(entity_name);
  }

  render() {
    return (
      <div className='app-continer'>
        <Header
          toggleSidebarLeftOpen={this.toggleSidebarLeftOpen}
        />

        <SidebarLeft
          sidebar_left_open={this.state.sidebar_left_open}
          toggleSidebarLeftOpen={this.toggleSidebarLeftOpen}
          setSelectedEntity={this.setSelectedEntity}
        />

        {this.props.children}
      </div>
    );
  }
}

export default App;

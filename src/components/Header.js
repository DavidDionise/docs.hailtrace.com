import React from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton
} from 'mui';
import MenuIcon from 'mui-icons/Menu';

class Header extends React.Component {
  render() {
    return (
      <div className='app-continer'>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Menu'
              onClick={this.props.toggleSidebarLeftOpen}
              >
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit'>
              Hail Trace API
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;

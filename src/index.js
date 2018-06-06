import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { AppContainer } from 'react-hot-loader';
import Routes from './Routes';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Routes />
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./Routes', () => {
    render();
  });
}

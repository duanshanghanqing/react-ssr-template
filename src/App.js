import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import './assets/less/global.less';

const App = props => (
  <div>
    <Header />
    {renderRoutes(props.route.routes)}
  </div>
);

// App.loadData = store => Promise.all([]);

export default App;

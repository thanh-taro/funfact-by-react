import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import App from 'components/App';
import {Feed, Trending, NotFound} from 'base/pages';

const routes = [{
  path: '/',
  component: App,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/feeds')
  },
  childRoutes: [
    { path: 'feeds', component: Feed },
    { path: 'trending', component: Trending },
    { path: '*', component: NotFound }
  ]
}];

ReactDOM.render((
  <Router history={browserHistory} children={routes}/>
), document.getElementById('root'));
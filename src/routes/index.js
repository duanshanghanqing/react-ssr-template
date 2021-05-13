import App from '../App';
import Home from '../containers/Home';
import Cat from '../containers/Cat';
import NotFound from '../containers/NotFound';

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
      },
      {
        path: '/home',
        component: Home,
        exact: true,
        loadData: Home.loadData,
      },
      {
        path: '/cat',
        component: Cat,
        exact: true,
        loadData: Cat.loadData,
      },
      {
        component: NotFound,
      },
    ],
  },
];

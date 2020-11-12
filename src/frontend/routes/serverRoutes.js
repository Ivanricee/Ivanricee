import Home from '../containers/Home'
import NotFound from '../containers/NotFound'

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },

  {
    exact: true,
    path: '/about',
    component: Home,
  },
  {
    exact: true,
    path: '/portfolio/:portfolio?',
    component: Home,
  },
  {
    exact: true,
    path: '/reel',
    component: Home,
  },
  {
    exact: true,
    path: '/cv',
    component: Home,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes

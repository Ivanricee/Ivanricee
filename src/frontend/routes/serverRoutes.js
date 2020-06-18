import Curriculum from '../containers/Curriculum'
import Portfolio from '../containers/Portfolio'
import Reel from '../containers/Reel'
import NotFound from '../containers/NotFound'

const routes = [
  {
    exact: true,
    path: '/',
    component: Curriculum,
  },
  {
    exact: true,
    path: '/portfolio',
    component: Portfolio,
  },
  {
    exact: true,
    path: '/reel',
    component: Reel,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes

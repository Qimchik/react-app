import Login from '../views/Login';
import Courses from '../views/Courses';
import Detail from '../views/Detail';

const indexRoutes = [
  { path: "/courses", component: Courses },
  { path: "/login", component: Login },
  { path: "/detail/:id", component: Detail },
  { path: "**", component: Login },
];

export default indexRoutes;

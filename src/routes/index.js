import Login from '../views/Login';
import Courses from '../views/Courses';
import Detail from '../views/Detail';

const indexRoutes = [
  { path: "/login", component: Login },
  { path: "/courses", component: Courses },
  { path: "/detail", component: Detail },
  { path: "**", component: Login },
];

export default indexRoutes;

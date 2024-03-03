import NoPermission from './error/403';
import NotFound from './error/404';
import Login from './login/login';
export default [
  {
    name: 'General',
    path: '/',
    children: [...Login, ...NotFound, ...NoPermission],
  },
];

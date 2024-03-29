// import { useUserStore } from '@/store';
import { createRouter, createWebHistory } from 'vue-router';
import Chat from './chat';
import General from './general';
export const routers = createRouter({
  history: createWebHistory(),
  routes: [...Chat, ...General],
});

// routers.beforeEach(async (to, from, next) => {
//   const { user } = useUserStore();
//   // next-line: check if route ("to" object) needs authenticated
//   if (
//     to.matched.some((record) => record.meta.requiresAuth) &&
//     isEmpty(user.FullName)
//   ) {
//     next('/login');
//   } else if (!isEmpty(user.FullName)) {
//     if (
//       to.matched.some((record) => record.meta.requiresAdmin) &&
//       !user.Roles?.includes('ADMIN')
//     ) {
//       next({ name: 'Forbidden' });
//     } else {
//       switch (to.name) {
//         case 'Management':
//           // const isAdmin = inject()
//           next({ name: 'Dashboard' });
//           break;
//         default:
//           next();
//           break;
//       }
//     }
//   } else next();
// });

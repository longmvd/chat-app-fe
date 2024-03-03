export default [
  {
    name: 'ChatHome',
    path: '/chat/users/:userId',
    component: () => import('@/views/chat/ChatHome.vue'),
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
];

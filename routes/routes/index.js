
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default [
  {
    name: '__index',
    path: '/',
    component: async () => await import('~/pages/index.vue')
  },
  {
    name: '__second',
    path: '/second',
    component: async () => await import('~/pages/second.vue')
  },
  {
    name: '__third',
    path: '/third',
    component: async () => await import('~/pages/third.vue')
  },
]



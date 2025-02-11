
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default [
  {
    name: '__index',
    path: '/',
    component: async () => await import('~/pages/index.vue')
  },
  {
    name: '__second',
    path: '/iosbug/second',
    component: async () => await import('~/pages/second.vue')
  },
  {
    name: '__third',
    path: '/iosbug/third',
    component: async () => await import('~/pages/third.vue')
  },

]



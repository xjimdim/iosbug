import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    base: '/iosbug/', // ✅ Ensure base is set correctly for GitHub Pages
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || { x: 0, y: 0 }
    },
    routes
  })

  // ✅ Fix for infinite loading when using router.push()
  router.onError((error) => {
    console.error('Router Error:', error)
  })

  return router
}

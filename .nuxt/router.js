import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9b324c06 = () => interopDefault(import('../pages/Habits/index.vue' /* webpackChunkName: "pages/Habits/index" */))
const _05deb61d = () => interopDefault(import('../pages/Home/index.vue' /* webpackChunkName: "pages/Home/index" */))
const _61ee4499 = () => interopDefault(import('../pages/Insights/index.vue' /* webpackChunkName: "pages/Insights/index" */))
const _6e58427e = () => interopDefault(import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */))
const _7730bdc1 = () => interopDefault(import('../pages/Profile/index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _c3073d3e = () => interopDefault(import('../pages/Register/index.vue' /* webpackChunkName: "pages/Register/index" */))
const _231fe23e = () => interopDefault(import('../pages/Settings/index.vue' /* webpackChunkName: "pages/Settings/index" */))
const _416c1bc7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Habits",
    component: _9b324c06,
    name: "Habits"
  }, {
    path: "/Home",
    component: _05deb61d,
    name: "Home"
  }, {
    path: "/Insights",
    component: _61ee4499,
    name: "Insights"
  }, {
    path: "/Login",
    component: _6e58427e,
    name: "Login"
  }, {
    path: "/Profile",
    component: _7730bdc1,
    name: "Profile"
  }, {
    path: "/Register",
    component: _c3073d3e,
    name: "Register"
  }, {
    path: "/Settings",
    component: _231fe23e,
    name: "Settings"
  }, {
    path: "/",
    component: _416c1bc7,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

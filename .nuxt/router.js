import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _860bed8c = () => interopDefault(import('../pages/Habits/Index.vue' /* webpackChunkName: "pages/Habits/Index" */))
const _4d470fa4 = () => interopDefault(import('../pages/Login/Index.vue' /* webpackChunkName: "pages/Login/Index" */))
const _80b88c38 = () => interopDefault(import('../pages/Profile/Index.vue' /* webpackChunkName: "pages/Profile/Index" */))
const _65092d5e = () => interopDefault(import('../pages/Register/Index.vue' /* webpackChunkName: "pages/Register/Index" */))
const _96064a44 = () => interopDefault(import('../pages/Settings/Index.vue' /* webpackChunkName: "pages/Settings/Index" */))
const _b67a29ec = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Habits/Index",
    component: _860bed8c,
    name: "Habits-Index"
  }, {
    path: "/Login/Index",
    component: _4d470fa4,
    name: "Login-Index"
  }, {
    path: "/Profile/Index",
    component: _80b88c38,
    name: "Profile-Index"
  }, {
    path: "/Register/Index",
    component: _65092d5e,
    name: "Register-Index"
  }, {
    path: "/Settings/Index",
    component: _96064a44,
    name: "Settings-Index"
  }, {
    path: "/",
    component: _b67a29ec,
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

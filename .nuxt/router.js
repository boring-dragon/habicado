import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ddc65fd = () => interopDefault(import('../pages/archive/index.vue' /* webpackChunkName: "pages/archive/index" */))
const _77c3a53a = () => interopDefault(import('../pages/habits/index.vue' /* webpackChunkName: "pages/habits/index" */))
const _317f2c9a = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _43453496 = () => interopDefault(import('../pages/insights/index.vue' /* webpackChunkName: "pages/insights/index" */))
const _114237e4 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _5d6d5a24 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _60720244 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _11751d84 = () => interopDefault(import('../pages/register/Index.vue' /* webpackChunkName: "pages/register/Index" */))
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
    path: "/archive",
    component: _7ddc65fd,
    name: "archive"
  }, {
    path: "/habits",
    component: _77c3a53a,
    name: "habits"
  }, {
    path: "/home",
    component: _317f2c9a,
    name: "home"
  }, {
    path: "/insights",
    component: _43453496,
    name: "insights"
  }, {
    path: "/login",
    component: _114237e4,
    name: "login"
  }, {
    path: "/profile",
    component: _5d6d5a24,
    name: "profile"
  }, {
    path: "/settings",
    component: _60720244,
    name: "settings"
  }, {
    path: "/register/Index",
    component: _11751d84,
    name: "register-Index"
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

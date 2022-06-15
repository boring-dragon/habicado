import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a648ec8c = () => interopDefault(import('../pages/archive/index.vue' /* webpackChunkName: "pages/archive/index" */))
const _36bad446 = () => interopDefault(import('../pages/habits/index.vue' /* webpackChunkName: "pages/habits/index" */))
const _4197e9fd = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _17aaef0e = () => interopDefault(import('../pages/insights/index.vue' /* webpackChunkName: "pages/insights/index" */))
const _044126e1 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _e727043e = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _30b8a541 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _fea75a7e = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
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
    path: "/archive",
    component: _a648ec8c,
    name: "archive"
  }, {
    path: "/habits",
    component: _36bad446,
    name: "habits"
  }, {
    path: "/home",
    component: _4197e9fd,
    name: "home"
  }, {
    path: "/insights",
    component: _17aaef0e,
    name: "insights"
  }, {
    path: "/login",
    component: _044126e1,
    name: "login"
  }, {
    path: "/profile",
    component: _e727043e,
    name: "profile"
  }, {
    path: "/register",
    component: _30b8a541,
    name: "register"
  }, {
    path: "/settings",
    component: _fea75a7e,
    name: "settings"
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

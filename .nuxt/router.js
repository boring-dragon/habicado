import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ca6c5416 = () => interopDefault(import('../pages/Archive/Index.vue' /* webpackChunkName: "pages/Archive/Index" */))
const _58f7dbfc = () => interopDefault(import('../pages/Habits/Index.vue' /* webpackChunkName: "pages/Habits/Index" */))
const _6284993c = () => interopDefault(import('../pages/Home/Index.vue' /* webpackChunkName: "pages/Home/Index" */))
const _76b3f144 = () => interopDefault(import('../pages/Insights/Index.vue' /* webpackChunkName: "pages/Insights/Index" */))
const _1c74cddc = () => interopDefault(import('../pages/Login/Index.vue' /* webpackChunkName: "pages/Login/Index" */))
const _7a5aca1c = () => interopDefault(import('../pages/Profile/Index.vue' /* webpackChunkName: "pages/Profile/Index" */))
const _01342426 = () => interopDefault(import('../pages/Register/Index.vue' /* webpackChunkName: "pages/Register/Index" */))
const _5127d1a6 = () => interopDefault(import('../pages/Settings/Index.vue' /* webpackChunkName: "pages/Settings/Index" */))
const _406c997c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Archive/Index",
    component: _ca6c5416,
    name: "Archive-Index"
  }, {
    path: "/Habits/Index",
    component: _58f7dbfc,
    name: "Habits-Index"
  }, {
    path: "/Home/Index",
    component: _6284993c,
    name: "Home-Index"
  }, {
    path: "/Insights/Index",
    component: _76b3f144,
    name: "Insights-Index"
  }, {
    path: "/Login/Index",
    component: _1c74cddc,
    name: "Login-Index"
  }, {
    path: "/Profile/Index",
    component: _7a5aca1c,
    name: "Profile-Index"
  }, {
    path: "/Register/Index",
    component: _01342426,
    name: "Register-Index"
  }, {
    path: "/Settings/Index",
    component: _5127d1a6,
    name: "Settings-Index"
  }, {
    path: "/",
    component: _406c997c,
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

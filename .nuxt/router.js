import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4587e95a = () => interopDefault(import('../pages/Habits/index.vue' /* webpackChunkName: "pages/Habits/index" */))
const _14740e8c = () => interopDefault(import('../pages/Home/index.vue' /* webpackChunkName: "pages/Home/index" */))
const _9dee1e94 = () => interopDefault(import('../pages/Insights/index.vue' /* webpackChunkName: "pages/Insights/index" */))
const _7f057412 = () => interopDefault(import('../pages/Inventory/index.vue' /* webpackChunkName: "pages/Inventory/index" */))
const _6e6a8e21 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _776fbcf8 = () => interopDefault(import('../pages/MoodHistory/index.vue' /* webpackChunkName: "pages/MoodHistory/index" */))
const _48319a04 = () => interopDefault(import('../pages/Profile/index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _0042cb1b = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _3d8abafe = () => interopDefault(import('../pages/Settings/index.vue' /* webpackChunkName: "pages/Settings/index" */))
const _9bb9f0b2 = () => interopDefault(import('../pages/ui-components.vue' /* webpackChunkName: "pages/ui-components" */))
const _5f1be21f = () => interopDefault(import('../pages/Profile/partials/CharacterProfileCard.vue' /* webpackChunkName: "pages/Profile/partials/CharacterProfileCard" */))
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
    path: "/Habits",
    component: _4587e95a,
    name: "Habits"
  }, {
    path: "/Home",
    component: _14740e8c,
    name: "Home"
  }, {
    path: "/Insights",
    component: _9dee1e94,
    name: "Insights"
  }, {
    path: "/Inventory",
    component: _7f057412,
    name: "Inventory"
  }, {
    path: "/login",
    component: _6e6a8e21,
    name: "login"
  }, {
    path: "/MoodHistory",
    component: _776fbcf8,
    name: "MoodHistory"
  }, {
    path: "/Profile",
    component: _48319a04,
    name: "Profile"
  }, {
    path: "/register",
    component: _0042cb1b,
    name: "register"
  }, {
    path: "/Settings",
    component: _3d8abafe,
    name: "Settings"
  }, {
    path: "/ui-components",
    component: _9bb9f0b2,
    name: "ui-components"
  }, {
    path: "/Profile/partials/CharacterProfileCard",
    component: _5f1be21f,
    name: "Profile-partials-CharacterProfileCard"
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

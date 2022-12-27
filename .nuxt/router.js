import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00d34bb5 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _412c5d70 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _14822512 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _00d34bb5,
    name: "about___en"
  }, {
    path: "/contact",
    component: _412c5d70,
    name: "contact___en"
  }, {
    path: "/ja",
    component: _14822512,
    name: "index___ja"
  }, {
    path: "/vi",
    component: _14822512,
    name: "index___vi"
  }, {
    path: "/ja/about",
    component: _00d34bb5,
    name: "about___ja"
  }, {
    path: "/ja/contact",
    component: _412c5d70,
    name: "contact___ja"
  }, {
    path: "/vi/about",
    component: _00d34bb5,
    name: "about___vi"
  }, {
    path: "/vi/contact",
    component: _412c5d70,
    name: "contact___vi"
  }, {
    path: "/",
    component: _14822512,
    name: "index___en"
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

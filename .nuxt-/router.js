import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _40e7b740 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _efc7e23e = () => import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */).then(m => m.default || m)
const _1d0be282 = () => import('../pages/post.vue' /* webpackChunkName: "pages/post" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _40e7b740,
			name: "index"
		},
		{
			path: "/posts",
			component: _efc7e23e,
			name: "posts"
		},
		{
			path: "/post",
			component: _1d0be282,
			name: "post"
		}
    ],
    fallback: false
  })
}

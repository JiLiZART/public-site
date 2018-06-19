import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const moduleOptions = {"id":"UA-10741741-2"}
  Vue.use(VueAnalytics, Object.assign({ router }, moduleOptions))
}

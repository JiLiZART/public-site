module.exports = {
  /*
  ** Headers of the page
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
  */
  head: {
    title: 'Николай Костюрин — artkost',
    meta: [
      {charset: 'utf-8'},

      {name: 'viewport', content: 'width=device-width, initial-scale=1'},

      {name: 'msapplication-TileColor', content: '#ffffff'},
      {name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
      {name: 'theme-color', content: '#ffffff'},

      {name: 'subject', content: 'Николай Костюрин — Fullstack Web Developer'}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'},

      {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},

      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'manifest', href: '/manifest.json'},
      {rel: 'me', href: 'mailto:nikolay@artkost.ru'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#723014'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  manifest: {
    name: 'Николай Костюрин — artkost',
    lang: 'ru'
  },

  /*
  generate: {
    routes() {
      return require('fs')
        .readdirSync('blog').map(
          (file) => '/blog/' + require('slugify')(file.replace(/\.md$/, ''))
        )
    }
  },
  */

  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-10741741-2'
    }]
  ]
}

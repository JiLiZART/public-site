const modifyHtml = (html) => {
  // Remove every script tag from generated HTML
  // html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  html = html.replace('<head>', `<head><!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-10741741-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-10741741-2');
</script>`)

  return html
};

module.exports = {
  /*
  ** Headers of the page
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
  */
  head: {
    title: 'Николай Костюрин — JavaScript Разработчк',
    htmlAttrs: {
      lang: 'ru'
    },
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
  // loading: {color: '#723014'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
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
    name: 'Николай Костюрин — JavaScript Разработчк',
    lang: 'ru'
  },

  generate: {
    routes() {
      return require('fs')
        .readdirSync('blog').map(
          (file) => '/blog/' + require('slugify')(file.replace(/\.md$/, ''))
        )
    }
  },

  loading: false, // Disable loading bar since AMP will not generate a dynamic page
  render: {
    // Disable resourceHints since we don't load any scripts for AMP
    resourceHints: false
  },
  hooks: {
    // This hook is called before generatic static html files for SPA mode
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    },
    // This hook is called before rendering the html to the browser
    'render:route': (url, page, { req, res }) => {
      page.html = modifyHtml(page.html)
    }
  },

  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-10741741-2'
    }]
  ]
};

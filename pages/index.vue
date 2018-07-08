<template>
  <section class="index-page" itemprop="author" itemscope itemtype="http://schema.org/Person">
    <h1 class="page__h1" itemprop="name">Николай Костюрин</h1>
    <page-description>Работаю JavaScript Разработчиком в
      <page-link href="https://www.ultimate-guitar.com/">Ultimate Guitar</page-link> 🎸
      <br> По вечерам помогаю улучшать
      <page-link href="http://rememba.ru">Ремембу</page-link> 🦄
      <br>
      <span class="page__text page__text_gray page__text_small">
        Раньше проходил стажировку в <page-link href="https://skyeng.ru/">Skyeng</page-link> 👷,
        проектировал SPA в <page-link href="https://www.medialooks.com">Medialooks</page-link> 👨‍🏫 и
        создавал mobile first адаптивные сайты в <page-link href="http://vivaster.com">VIVAster</page-link> 👨‍💻
      </span>
    </page-description>
    <main class="main">
      <section class="main__col">
        <h3 class="page__h3">Мои поделки 💼</h3>
        <ul class="list projects">
          <li class="list__item projects__item" v-for="item in githubProjects">
            <github-favicon class="projects__item-icon"></github-favicon>
            <page-link class="projects__item-link" :href="item.url">{{item.title}}</page-link>
            <span class="projects__item-text" v-html="' — ' + item.text"></span>
          </li>
        </ul>
        <h3 class="page__h3">Пишу на Хабрахабр 📝</h3>
        <ul class="list articles">
          <li class="list__item articles__item" v-for="item in habrArticles">
            <habr-favicon class="articles__item-icon"></habr-favicon>
            <page-link class="articles__item-link" :href="item.url">{{item.title}}</page-link>
          </li>
        </ul>
      </section>
      <section class="main__col">
        <h3 class="page__h3">Что умею ✅</h3>
        <techs-logos class="index-page__techs"></techs-logos>
        <ul class="list list_bullets">
          <li class="list__item" itemprop="keywords">JavaScript ES5, ES6, TypeScript, Node.js</li>
          <li class="list__item" itemprop="keywords">SPA на React, Redux, MobX, ReactRouter, Vue.js, Vuex, VueRouter, Angular 2, NgRx</li>
          <li class="list__item" itemprop="keywords">REST API на Express, Koa, Yii по
            <page-link href="http://jsonapi.org/">http://jsonapi.org/</page-link>
            стандарт используя
            <page-link href="http://json-schema.org/">http://json-schema.org/</page-link>
            и
            <page-link href="https://jwt.io/">https://jwt.io/</page-link>
          </li>
          <li class="list__item" itemprop="keywords">Полный стек БЭМ (Который у Яндекса), bem.js, bemjson, bh.js, bemtree</li>
          <li class="list__item" itemprop="keywords">HTML5, CSS3, Stylus, Less, Sass, PostCSS и БЭМ методология</li>
          <li class="list__item" itemprop="keywords">PHP 5/7, Yii1, Yii2</li>
          <li class="list__item" itemprop="keywords">Сборщики Gulp, Grunt, Webpack 3 и ENB</li>
          <li class="list__item">jQuery, ну а как без него?</li>
        </ul>
        <h3 class="page__h3">Что изучаю 👨‍🎓</h3>
        <ul class="list">
          <li class="list__item">Книгу
            <page-link
              href="https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html">
              <s>The
                Swift Programming Language</s></page-link>
          </li>

          <li class="list__item">
            <page-link href="https://angular.io/docs/ts/latest/guide/"><s>Angular 2 Developer Guide</s></page-link>
          </li>

          <li class="list__item">Книгу
            <page-link href="https://rurust.github.io/rust_book_ru/">The Rust
              Programming Language
            </page-link>
          </li>

          <li class="list__item">
            <page-link href="https://github.com/astaxie/build-web-application-with-golang/blob/master/ru/preface.md">
              Build
              Web Application with Golang
            </page-link>
          </li>

          <li class="list__item">Книгу
            <page-link href="https://www.ozon.ru/context/detail/id/18322266/"><s>The
              Lean Startup</s></page-link>
          </li>
          <li class="list__item">А еще решаю непростые задачки нa
            <page-link href="https://www.codewars.com/users/JiLiZART">Codewars</page-link>
            и
            <page-link href="https://www.hackerrank.com/JiLiZART">Hackerrank</page-link>
            с помощью js и Swift
          </li>
        </ul>
      </section>
    </main>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import GithubFavicon from '~/components/GithubFavicon.vue'
  import HabrFavicon from '~/components/HabrFavicon.vue'
  import TechsLogos from '~/components/TechsLogos.vue'
  import PageLink from '~/components/PageLink.vue'
  import PageDescription from '~/components/PageDescription.vue'

  export default {
    components: {
      Logo,
      TechsLogos,
      GithubFavicon,
      HabrFavicon,
      PageLink,
      PageDescription
    },

    data() {
      return {
        githubProjects: [
          {
            url: 'https://github.com/JiLiZART/bbob',
            title: 'BBob',
            text: 'быстрый парсер BB кодов в AST дерево, без регулярок и зависимостей'
          },
          {
            url: 'https://github.com/JiLiZART/sequence-as-promise',
            title: 'sequence as promise',
            text: 'выполняет массив функций последовательно и возвращает промис'
          },
          {
            url: 'https://github.com/JiLiZART/may.js',
            title: 'may.js',
            text: 'маленькая монадоподобная функция'
          },
          {
            url: 'https://github.com/w3gh/ghost.js',
            title: 'ghost.js',
            text: `<s>хост</s> и чат бот для Battle.net/PvPGN для Warcraft 3 на js`
          },
          {
            url: 'https://github.com/artkost/yii2-qa',
            title: 'yii2-qa',
            text: 'модуль вопросов и ответов на Yii2'
          },
          {
            url: 'https://github.com/jilizart/task-tracker',
            title: 'task-tracker',
            text: 'прототип таск трекера на Vue 2 для проверки бизнес идеи'
          }
        ],
        habrArticles: [
          {
            url: 'https://habrahabr.ru/post/341564/',
            title: 'Управляем состоянием в Angular при помощи Mobx'
          },
          {
            url: 'https://habrahabr.ru/post/329580/',
            title: 'Что нового нас ждет в Swift 4?'
          },
          {
            url: 'https://habrahabr.ru/post/282578/',
            title: 'Mobx — управление состоянием вашего приложения'
          },
          {
            url: 'https://habrahabr.ru/post/264423/',
            title: 'Изоморфное Приложение с React и Redux'
          },
          {
            url: 'https://habrahabr.ru/post/233705/',
            title: 'Настоящее модульное тестирование в AngularJS'
          },
          {
            url: 'https://habrahabr.ru/post/217689/',
            title: 'Ansible и Docker, почему и зачем?'
          },
          {
            url: 'https://habrahabr.ru/post/147038/',
            title: 'MVC умер, пришло время MOVE'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  $phoneBreakpoint = 700px

  .index-page
    &__techs
      margin-top 1rem
      margin-bottom 1rem

  .projects
    .projects__item-link.projects__item-link
    .projects__item-icon.projects__item-icon
      display inline-block
      vertical-align middle
      margin-right .25rem

  .articles
    .articles__item-link.articles__item-link
    .articles__item-icon.articles__item-icon
      display inline-block
      vertical-align middle
      margin-right .25rem

</style>

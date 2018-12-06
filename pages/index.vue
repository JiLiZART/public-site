<template>
  <section class="index-page" itemprop="author" itemscope itemtype="http://schema.org/Person">
    <header role="banner" tabindex="1">
      <h1 class="page__h1" itemprop="name">Николай Костюрин</h1>
      <page-description>Работаю JavaScript Разработчиком в
        <page-link href="https://www.ultimate-guitar.com/" aria-label="Компания Ultimate Guitar">Ultimate Guitar
        </page-link>
        <span aria-hidden="true">🎸</span>
        <br> По вечерам помогаю улучшать
        <page-link href="http://rememba.ru" aria-label="Проект Ремемба">Ремембу</page-link>
        <span aria-hidden="true">🦄</span>
        <br>
        <span class="page__text page__text_gray page__text_small">
        Раньше проходил стажировку в <page-link href="https://skyeng.ru/" aria-label="Skyeng">Skyeng</page-link> 👷,
        проектировал SPA в <page-link href="https://www.medialooks.com" aria-label="Medialooks">Medialooks</page-link> 👨‍🏫 и
        создавал сложные интерфейсы в <page-link href="http://edster.ru" aria-label="Edster">Edster</page-link> 👨‍💻
      </span>
      </page-description>
    </header>
    <main class="main" role="main">
      <section class="main__col">
        <article tabindex="2">
          <h3 class="page__h3">Мои поделки <span aria-hidden="true">💼</span></h3>
          <ul class="list projects" role="list" aria-label="Список проектов на Гитхабе">
            <li class="list__item projects__item" role="listitem" v-for="item in githubProjects">
              <github-favicon class="projects__item-icon" aria-hidden="true"></github-favicon>
              <page-link class="projects__item-link" :href="item.url">
                {{item.title}}
              </page-link>
              <span class="projects__item-text" v-html="' — ' + item.text"></span>
            </li>
          </ul>
        </article>
        <article tabindex="4">
          <h3 class="page__h3">Пишу на Хабрахабр <span aria-hidden="true">📝</span></h3>
          <ul class="list articles" role="list" aria-label="Список статей на Хабре">
            <li class="list__item articles__item" role="listitem" v-for="item in habrArticles">
              <habr-favicon class="articles__item-icon" aria-hidden="true"></habr-favicon>
              <page-link class="articles__item-link" :href="item.url">
                {{item.title}}
              </page-link>
            </li>
          </ul>
        </article>
      </section>
      <section class="main__col">
        <article tabindex="3">
          <h3 class="page__h3">Что умею <span aria-hidden="true">✅</span></h3>
          <techs-logos class="index-page__techs"></techs-logos>
          <ul class="list list_bullets" aria-label="Список ключевых слов технологий" role="list">
            <li class="list__item" itemprop="keywords" role="listitem">JavaScript ES5, ES6, TypeScript, Node.js</li>
            <li class="list__item" itemprop="keywords" role="listitem">
              SPA на React, Redux, MobX, ReactRouter, Vue.js, Vuex, VueRouter, Angular 2, NgRx
            </li>
            <li class="list__item" itemprop="keywords" role="listitem">REST API на Express, Koa, Yii по
              <page-link href="http://jsonapi.org/">jsonapi</page-link>
              стандарт используя
              <page-link href="http://json-schema.org/">json schema</page-link>
              и
              <page-link href="https://jwt.io/">JWT</page-link>
            </li>
            <li class="list__item" itemprop="keywords" role="listitem">
              Полный стек БЭМ (Который у Яндекса), bem.js, bemjson, bh.js, bemtree
            </li>
            <li class="list__item" itemprop="keywords" role="listitem">HTML5, CSS3, Stylus, Less, Sass, PostCSS и БЭМ методология</li>
            <li class="list__item" itemprop="keywords" role="listitem">PHP 5/7, Yii1, Yii2</li>
            <li class="list__item" itemprop="keywords" role="listitem">Сборщики Gulp, Grunt, Webpack 3 и ENB</li>
            <li class="list__item" role="listitem">jQuery, ну а как без него?</li>
          </ul>
        </article>
        <article tabindex="5">
          <h3 class="page__h3">Что изучаю 👨‍🎓</h3>
          <ul class="list" aria-label="Список книг которые читаю" role="list">
            <li class="list__item" role="listitem">Книгу
              <page-link
                aria-label="Прочитал книгу The
                Swift Programming Language"
                href="https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html">
                <s>The
                  Swift Programming Language</s></page-link>
            </li>

            <li class="list__item" role="listitem">
              <page-link aria-label="Прочитал Angular 2 Developer Guide"
                         href="https://angular.io/docs/ts/latest/guide/"><s>Angular 2 Developer Guide</s></page-link>
            </li>

            <li class="list__item" role="listitem">Книгу
              <page-link aria-label="Читаю книгу The Rust
              Programming Language" href="https://rurust.github.io/rust_book_ru/">The Rust
                Programming Language
              </page-link>
            </li>

            <li class="list__item" role="listitem">
              <page-link aria-label="Читаю книгу Build
              Web Application with Golang"
                         href="https://github.com/astaxie/build-web-application-with-golang/blob/master/ru/preface.md">
                Build
                Web Application with Golang
              </page-link>
            </li>

            <li class="list__item" role="listitem">Книгу
              <page-link aria-label="Прочитал книгу The Lean Startup"
                         href="https://www.ozon.ru/context/detail/id/18322266/"><s>The
                Lean Startup</s></page-link>
            </li>
            <li class="list__item" role="listitem">А еще решаю непростые задачки нa
              <page-link aria-label="Профиль на Codewars" href="https://www.codewars.com/users/JiLiZART">Codewars <span
                class="badge" :style="badgeStyle" title="Codewards Badge"></span></page-link>
              <br/>
              и
              <page-link aria-label="Профиль на Hackerrank" href="https://www.hackerrank.com/JiLiZART">Hackerrank
              </page-link>
              с помощью js и Swift
            </li>
          </ul>
        </article>
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
        ],
        badgeStyle: {
          backgroundImage: 'url(https://www.codewars.com/users/JiLiZART/badges/micro)'
        }
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

  .badge
    height 20px
    width 120px
    display inline-block
    vertical-align top

</style>

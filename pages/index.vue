<template>
  <section>
    <h1 class="page__h1">Николай Костюрин</h1>
    <page-description>Работаю Fullstack Разработчиком в
      <page-link href="https://skyeng.ru/">Skyeng</page-link>
      <br> По вечерам помогаю улучшать
      <page-link href="http://rememba.ru">Ремембу</page-link>
      <br>
      <small class="page__small">
        Раньше проектировал SPA в
        <page-link href="https://www.medialooks.com">Medialooks</page-link>
        и
        создавал mobile first адаптивные сайты в
        <page-link href="http://vivaster.com">VIVAster</page-link>
      </small>
    </page-description>
    <main class="main">
      <section class="main__col">
        <h3 class="page__h3">Мои поделки</h3>
        <ul class="list">
          <li class="list__item">
            <page-link href="https://github.com/JiLiZART/sequence-as-promise">sequence as promise</page-link>
            — выполняет массив функций
            последовательно и возвращает промис
          </li>
          <li class="list__item">
            <page-link href="https://github.com/JiLiZART/may.js">may.js</page-link>
            —
            маленькая монадоподобная функция
          </li>
          <li class="list__item">
            <page-link href="https://github.com/w3gh/ghost.js">ghost.js</page-link>
            — <s>хост</s> и чат бот для Battle.net/PvPGN для
            Warcraft 3 на js
          </li>
          <li class="list__item">
            <page-link href="https://github.com/artkost/yii2-qa">yii2-qa</page-link>
            — модуль
            вопросов и ответов на Yii2
          </li>

          <li class="list__item">
            <page-link href="https://github.com/jilizart/task-tracker">task-tracker</page-link>
            — прототип таск
            трекера на Vue2 для проверки бизнес идеи
          </li>
        </ul>
        <h3 class="page__h3">Пишу на Хабрахабр</h3>
        <ul class="list">
          <li class="list__item">
            <page-link href="https://habrahabr.ru/post/341564/">Управляем состоянием в Angular при помощи Mobx
            </page-link>
          </li>
          <li class="list__item">
            <page-link href="https://habrahabr.ru/post/329580/">Что нового нас ждет в Swift 4?</page-link>
          </li>
          <li class="list__item">
            <page-link href="https://habrahabr.ru/post/282578/">Mobx — управление
              состоянием вашего приложения
            </page-link>
          </li>
          <li class="list__item">
            <page-link href="https://habrahabr.ru/post/264423/">Изоморфное Приложение
              с React и Redux
            </page-link>
          </li>
          <li class="list__item">
            <page-link href="https://habrahabr.ru/post/233705/">Настоящее модульное
              тестирование в AngularJS
            </page-link>
          </li>
          <li class="list__item">
            <page-link href="https://habrahabr.ru/post/217689/">Ansible и Docker,
              почему и зачем?
            </page-link>
          </li>
          <li class="list__item">
            <page-link href="https://habrahabr.ru/post/147038/">MVC умер, пришло время
              MOVE
            </page-link>
          </li>
        </ul>
      </section>
      <section class="main__col">
        <h3 class="page__h3">Что умею</h3>
        <ul class="list">
          <li class="list__item">JavaScript ES5, ES6, TypeScript, Node.js</li>
          <li class="list__item">SPA на React, Redux, MobX, ReactRouter, Vue.js, Vuex, VueRouter, Angular 2, NgRx</li>
          <li class="list__item">REST API на Express, Koa, Yii по
            <page-link href="http://jsonapi.org/">http://jsonapi.org/</page-link>
            стандарт используя
            <page-link href="http://json-schema.org/">http://json-schema.org/</page-link>
            и
            <page-link href="https://jwt.io/">https://jwt.io/</page-link>
          </li>
          <li class="list__item">Полный стек БЭМ (Который у Яндекса), bem.js, bemjson, bh.js, bemtree</li>
          <li class="list__item">HTML5, CSS3, Stylus, Less, Sass, PostCSS и БЭМ методология</li>
          <li class="list__item">PHP 5/7, Yii1, Yii2</li>
          <li class="list__item">Сборщики Gulp, Grunt, Webpack 3 и ENB</li>
          <li class="list__item">jQuery, ну а как без него?</li>
        </ul>
        <h3 class="page__h3">Что изучаю</h3>
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
  import PageLink from '~/components/PageLink.vue'
  import PageDescription from '~/components/PageDescription.vue'

  export default {
    components: {
      Logo,
      PageLink,
      PageDescription
    }
  }
</script>

<style lang="stylus">

  .list
    margin 0
    padding 0
    list-style none

    &__item
      margin-bottom .5rem

</style>

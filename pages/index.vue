<template>
  <main class="main">
    <section class="main__col">
        <h3 class="page__h3">Мои поделки</h3>
        <ul class="list">
            <li class="list__item"><a class="page__link" href="https://github.com/JiLiZART/sequence-as-promise"
                                      target="_blank" rel="noopener noreferrer">sequence as promise</a> — выполняет массив функций
                последовательно и возвращает промис
            </li>
            <li class="list__item"><a class="page__link" href="https://github.com/JiLiZART/may.js" target="_blank" rel="noopener noreferrer">may.js</a>
                —
                маленькая монадоподобная функция
            </li>
            <li class="list__item"><a class="page__link" href="https://github.com/w3gh/ghost.js"
                                      target="_blank" rel="noopener noreferrer">ghost.js</a> — <s>хост</s> и чат бот для Battle.net/PvPGN для
                Warcraft 3 на js
            </li>
            <li class="list__item"><a class="page__link" href="https://github.com/artkost/yii2-qa" target="_blank" rel="noopener noreferrer">yii2-qa</a>
                — модуль
                вопросов и ответов на Yii2
            </li>

            <li class="list__item"><a class="page__link" href="https://github.com/jilizart/task-tracker"
                                      target="_blank" rel="noopener noreferrer">task-tracker</a> — прототип таск
              трекера на Vue2 для проверки бизнес идеи
            </li>
        </ul>
        <h3 class="page__h3">Пишу на Хабрахабр</h3>
        <ul class="list">
            <li class="list__item"><a href="https://habrahabr.ru/post/341564/" class="page__link">Управляем состоянием в Angular при помощи Mobx</a></li>
            <li class="list__item"><a href="https://habrahabr.ru/post/329580/" class="page__link">Что нового нас ждет в Swift 4?</a></li>
            <li class="list__item"><a href="https://habrahabr.ru/post/282578/" class="page__link">Mobx — управление
                состоянием вашего приложения</a></li>
            <li class="list__item"><a href="https://habrahabr.ru/post/264423/" class="page__link">Изоморфное Приложение
                с React и Redux</a></li>
            <li class="list__item"><a href="https://habrahabr.ru/post/233705/" class="page__link">Настоящее модульное
                тестирование в AngularJS</a></li>
            <li class="list__item"><a href="https://habrahabr.ru/post/217689/" class="page__link">Ansible и Docker,
                почему и зачем?</a></li>
            <li class="list__item"><a href="https://habrahabr.ru/post/147038/" class="page__link">MVC умер, пришло время
                MOVE</a></li>
        </ul>
    </section>
    <section class="main__col">
        <h3 class="page__h3">Что умею</h3>
        <ul class="list">
            <li class="list__item">JavaScript ES5, ES6, TypeScript, Node.js</li>
            <li class="list__item">SPA на React, Redux, MobX, ReactRouter, Vue.js, Vuex, VueRouter, Angular 2, NgRx</li>
            <li class="list__item">REST API на Express, Koa, Yii по <a class="page__link" href="http://jsonapi.org/">http://jsonapi.org/</a>
                стандарт используя
                <a class="page__link" href="http://json-schema.org/">http://json-schema.org/</a> и <a class="page__link"
                                                                                                      href="https://jwt.io/">https://jwt.io/</a>
            </li>
            <li class="list__item">Полный стек БЭМ (Который у Яндекса), bem.js, bemjson, bh.js, bemtree</li>
            <li class="list__item">HTML5, CSS3, Stylus, Less, Sass, PostCSS и БЭМ методология</li>
            <li class="list__item">PHP 5/7, Yii1, Yii2</li>
            <li class="list__item">Сборщики Gulp, Grunt, Webpack 3 и ENB</li>
            <li class="list__item">jQuery, ну а как без него?</li>
        </ul>
        <h3 class="page__h3">Что изучаю</h3>
        <ul class="list">
            <li class="list__item">Книгу <a class="page__link"
                                            href="https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html"><s>The
                Swift Programming Language</s></a></li>

            <li class="list__item"><a class="page__link"
                                      href="https://angular.io/docs/ts/latest/guide/"><s>Angular 2 Developer Guide</s></a></li>

            <li class="list__item">Книгу <a class="page__link" href="https://rurust.github.io/rust_book_ru/">The Rust
                Programming Language</a></li>

            <li class="list__item"><a class="page__link"
                                      href="https://github.com/astaxie/build-web-application-with-golang/blob/master/ru/preface.md">Build
                Web Application with Golang</a></li>

            <li class="list__item">Книгу <a class="page__link" href="https://www.ozon.ru/context/detail/id/18322266/"><s>The
                Lean Startup</s></a></li>
            <li class="list__item">А еще решаю непростые задачки нa <a class="page__link"
                                                                       href="https://www.codewars.com/users/JiLiZART">Codewars</a>
                и <a class="page__link" href="https://www.hackerrank.com/JiLiZART">Hackerrank</a> с помощью js и Swift
            </li>
        </ul>
    </section>
</main>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
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

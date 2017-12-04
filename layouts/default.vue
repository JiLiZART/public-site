<template>
  <div class="page" :class="classObject">
    <header class="header">
      <logo></logo>
      <h1 class="page__h1">Николай Костюрин</h1>
      <p class="page__description">Работаю Fullstack Разработчиком в
        <a href="https://skyeng.ru/" target="_blank" rel="noopener noreferrer" class="page__link">Skyeng</a>
        <br> По вечерам помогаю улучшать
        <a href="http://rememba.ru" target="_blank" rel="noopener noreferrer" class="page__link">Ремембу</a>
        <br>
        <small class="page__small">
          Раньше проектировал SPA в
          <a href="https://www.medialooks.com" target="_blank" rel="noopener noreferrer" class="page__link">Medialooks</a>
          и
          создавал mobile first адаптивные сайты в
          <a href="http://vivaster.com" target="_blank" rel="noopener noreferrer" class="page__link">VIVAster</a>
        </small>
      </p>
    </header>
    <nuxt/>
    <footer class="footer">
      <h3 class="page__h3">Со мной можно связаться</h3>
      <p class="page__p">По скайпу <a class="page__link"
                                      href="skype:jilizart?chat">JiLiZART</a>
        или написать на почту <a class="page__link"
                                 href="mailto:nikolay@artkost.ru">nikolay@artkost.ru</a>.
      </p>
      <p class="page__p">Так же я есть в <a href="https://twitter.com/jilizart" class="page__link">Twitter</a>, <a
        href="https://ru.linkedin.com/in/nkostyurin" class="page__link">Linkedin</a>, <a
        href="https://www.facebook.com/JiLiZART" class="page__link">Facebook</a>, <a
        href="https://t.me/jilizart" class="page__link">Telegram</a> и <a
        href="https://github.com/JiLiZART" class="page__link">Github</a></p>
      <p class="page__p">Для HR у меня есть <a
        href="https://docs.google.com/document/d/17mfG-_zVQLGED9dctMpNRMUt4efhVaIc2YKm0k5DJyo/edit?usp=sharing" class="page__link">CV</a>
      </p>
    </footer>
    <img src="/stat.gif" alt="">
  </div>
</template>
<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },

    computed: {
      classObject() {
        return {
          'page_invert': this.isNightTime
        }
      },

      isNightTime() {
        const date = new Date()
        const hours = date.getHours()

        return hours >= 23 && hours <= 8
      }
    }
  }
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700');

  $linkColor = #004A94
  $linkHoverColor = #d7380f

  $pageTextColor = #333333
  $pageBackgroundColor = #FCFAF8

  $phoneBreakpoint = 700px

  body
    margin 0
    direction ltr
    font-family Rubik, NotoSans, Roboto, Helvetica, Arial, serif
    font-weight 400
    line-height 1.3
    -webkit-font-smoothing subpixel-antialiased
    -moz-osx-font-smoothing auto

  .header
    padding-top 1rem

    @media screen and (min-width: $phoneBreakpoint)
      padding-top 3rem

  .main
    display flex
    justify-content space-between
    flex-wrap wrap

    @media screen and (min-width: $phoneBreakpoint)
      flex-wrap nowrap

  .page
    color $pageTextColor
    background $pageBackgroundColor
    padding 0 4%
    transition-property background, color
    transition-duration .33s
    transition-timing-function ease-out

    &__h1,
    &__h2,
    &__h3
      margin 0
      margin-top 1rem
      margin-bottom 1rem

    &__h1
      font-size 2.25rem
      font-weight 400

      @media screen and (min-width: $phoneBreakpoint)
        font-size 3.875rem

    &__h2
      font-size 2.25rem
      font-weight 400

    &__h3
      font-size 1.625rem
      font-weight 500

    &__p
      margin 0
      margin-bottom 0.5rem

    &__description
      font-size 1.625rem
      font-weight 300
      margin-top 1rem
      margin-bottom 1rem

      @media screen and (min-width: $phoneBreakpoint)
        font-size 2.25rem
        max-width 825px

    &__small
      font-size 1rem
      font-weight 300

      @media screen and (min-width: $phoneBreakpoint)
        font-size 1.625rem
        max-width 825px

    &__link
      color $linkColor
      fill $linkColor
      border-bottom 1px solid rgba($linkColor, .2)
      text-decoration none
      transition-property border-bottom, border-color, background, color, fill
      transition-duration .33s
      transition-timing-function ease-out

      &:visited
        color rgba($linkColor, .2)

      &:hover
        color $linkHoverColor
        fill $linkHoverColor
        border-color rgba($linkHoverColor, .2)
        transition none

    &_invert
      color lighten(invert($pageTextColor), 50%)
      background invert($pageBackgroundColor)

      .page__link
        color lighten($linkColor, 50%)
        fill lighten($linkColor, 50%)
        border-bottom 1px solid rgba(lighten($linkColor, 50%), .2)

        &:visited
          color rgba(lighten($linkColor, 50%), .2)

</style>

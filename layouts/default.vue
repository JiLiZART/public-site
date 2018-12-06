<template>
  <div class="page" ref="page" itemref="data-author" itemscope itemtype="http://schema.org/WebSite">
    <header class="header" aria-hidden="true">
      <Logo></Logo>
    </header>
    <nuxt />
    <Footer></Footer>
    <img src="/stat.gif" alt="Stats pixel" layout="fixed" height="1px" width="1px" />
    <noscript><div><img src="https://mc.yandex.ru/watch/860366" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  </div>
</template>
<script>
  import Logo from '~/components/Logo.vue'
  import Footer from '~/components/Footer.vue'
  import PrimaryMenu from '~/components/PrimaryMenu.vue'
  import HeadingSecondary from '~/components/HeadingSecondary'
  import PageLink from '~/components/PageLink.vue'
  import PageText from '~/components/PageText.vue'
  import PageDescription from '~/components/PageDescription.vue'

  export default {
    components: {
      Logo,
      Footer,
      PageLink,
      PageText,
      PageDescription,
      HeadingSecondary,
      PrimaryMenu
    },

    data() {
      return {

      }
    }
  }
</script>

<style lang="stylus">
  $linkColor = hsl(210, 100%, 29%)
  $linkHoverColor = hsl(12, 87%, 45%)

  $pageTextColor = hsl(0, 0%, 20%)
  $pageGrayTextColor = hsl(0, 0%, 40%)
  $pageBackgroundColor = hsl(30, 40%, 98%)

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
    display flex
    align-items center
    padding-top 1rem

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

    &__text
      margin 0
      margin-bottom 0.5rem

    &__h1,
    &__h2,
    &__h3,
    &__text h1,
    &__text h2,
    &__text h3
      margin 0
      margin-top 1rem
      margin-bottom 1rem

    &__h1,
    &__text h1
      font-size 2.25rem
      font-weight 400

      @media screen and (min-width: $phoneBreakpoint)
        font-size 3.875rem

    &__h2,
    &__text h2
      font-size 2.25rem
      font-weight 400

    &__h3,
    &__text h3
      font-size 1.625rem
      font-weight 500

    &__p,
    &__text p
      margin 0
      margin-bottom 0.5rem

    &__description
      font-size 1.625rem
      font-weight 300
      margin-top 1rem
      margin-bottom 1rem

      @media screen and (min-width: $phoneBreakpoint)
        font-size 2.25rem
        max-width 950px

    &__text_small
      font-size 1rem
      font-weight 300

      @media screen and (min-width: $phoneBreakpoint)
        font-size 1.425rem
        line-height 1.3
        max-width 825px

    &__text_gray
      color $pageGrayTextColor

    &__link
      color $linkColor
      fill $linkColor
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

      &.nuxt-link-exact-active
        color darken($linkColor, 50%)

    /*
    &_invert
      color lighten(invert($pageTextColor), 50%)
      background invert($pageBackgroundColor)

      .page__link
        color lighten($linkColor, 50%)
        fill lighten($linkColor, 50%)
        border-bottom 1px solid rgba(lighten($linkColor, 50%), .2)

        &:visited
          color rgba(lighten($linkColor, 50%), .2)
    */

  .list
    margin 0
    padding 0
    list-style none

    &__item
      margin-bottom .5rem

  .list_bullets
    .list__item:before
      content '— '

</style>

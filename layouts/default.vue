<template>
  <div class="page" ref="page" itemref="data-author" itemscope itemtype="http://schema.org/WebSite">
    <header class="header">
      <logo></logo>
    </header>
    <nuxt/>
    <footer class="footer" id="data-author" itemprop="author" itemscope itemtype="http://schema.org/Person">
      <h3 class="page__h3">Со мной можно связаться 🤙</h3>
      <meta itemprop="name" content="Николай Костюрин">
      <page-text>По скайпу <page-link href="skype:jilizart?chat" itemprop="skype">JiLiZART</page-link>
        или написать на почту <page-link href="mailto:nikolay@artkost.ru" itemprop="email">nikolay@artkost.ru</page-link>.
      </page-text>
      <page-text>Так же я есть в <page-link href="https://twitter.com/jilizart" itemprop="twitter">Twitter</page-link>, <page-link
        href="https://ru.linkedin.com/in/nkostyurin" itemprop="linkedin">Linkedin</page-link>, <page-link
        href="https://www.facebook.com/JiLiZART" itemprop="facebook">Facebook</page-link>, <page-link
        href="https://t.me/jilizart" itemprop="telegram">Telegram</page-link> и <page-link
        href="https://github.com/JiLiZART" itemprop="github">Github</page-link></page-text>
      <page-text>Для HR у меня есть <page-link
        href="https://docs.google.com/document/d/17mfG-_zVQLGED9dctMpNRMUt4efhVaIc2YKm0k5DJyo/edit?usp=sharing">CV</page-link>
      </page-text>
    </footer>
    <img src="/stat.gif" alt="">
    <!-- Yandex.Metrika counter -->
    <script src="https://mc.yandex.ru/metrika/watch.js" type="text/javascript"></script>
    <script type="text/javascript">
      try {
        var yaCounter860366 = new Ya.Metrika({
          id: 860366,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true
        });
      } catch (e) {
      }
    </script>
    <noscript>
      <div><img src="https://mc.yandex.ru/watch/860366" style="position:absolute; left:-9999px;" alt=""/></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
  </div>
</template>
<script>
  import Logo from '~/components/Logo.vue'
  import PageLink from '~/components/PageLink.vue'
  import PageText from '~/components/PageText.vue'
  import PageDescription from '~/components/PageDescription.vue'

  export default {
    components: {
      Logo,
      PageLink,
      PageText,
      PageDescription
    }
  }
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700');

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
        max-width 925px

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

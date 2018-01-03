<template>
  <span class="habr-favicon" title="Habrahabr"></span>
</template>

<script>
  export default {
    name: 'HabrFavicon',
    props: {},
    components: {}
  }
</script>

<style lang="stylus">
  .habr-favicon {
    display inline-block
    vertical-align top
    width 1rem
    height 1rem
    background url('../assets/habr-favicon.png') 50% 50% no-repeat
    background-size 1rem 1rem
  }
</style>

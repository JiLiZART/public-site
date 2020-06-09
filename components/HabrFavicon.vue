<template>
  <span class="habr-favicon" title="Habrahabr" />
</template>

<script>
export default {
  name: 'HabrFavicon',
  components: {},
  props: {}
}
</script>

<style lang="stylus">
  .habr-favicon {
    display inline-block
    vertical-align top
    width 1rem
    height 1rem
    min-width 1rem
    background url('../assets/habr-favicon.png') 50% 50% no-repeat
    background-size 1rem 1rem
  }
</style>

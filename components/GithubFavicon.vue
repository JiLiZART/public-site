<template>
  <span class="github-favicon" title="Github"></span>
</template>

<script>
  export default {
    name: 'GithubFavicon',
    props: {},
    components: {}
  }
</script>

<style lang="stylus">
  .github-favicon {
    display inline-block
    vertical-align top
    width 1rem
    height 1rem
    background url('../assets/github-favicon.svg') 50% 50% no-repeat
    background-size 1rem 1rem
  }
</style>

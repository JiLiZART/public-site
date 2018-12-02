<template>
  <span>{{params}}</span>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: {},
    components: {},

    computed: {
      params() {
        console.log(this)
        return 'adsasd'
      }
    }
  }
</script>

<style lang="stylus">
</style>

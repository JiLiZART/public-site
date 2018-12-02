<template>
  <nav class="navigation">
    <nuxt-link :to="{name: 'index'}" class="page__link navigation__link">Обо мне</nuxt-link>
    <nuxt-link :to="{name: 'blog'}" class="page__link navigation__link">Заметки</nuxt-link>
  </nav>
</template>

<script>
  export default {
    name: 'PrimaryMenu',
    props: {}
  }
</script>

<style lang="stylus">
  .navigation
    padding 0 1rem
    font-size 1.1rem

    .navigation__link
      padding 0 .5rem

</style>

<template>
  <div class="post-item">
    <header class="post-item__header">
      <page-date class="post-item__date" :time="item.created_at"></page-date>
      <h2 class="page__h2 post-item__title">
        <page-link class="post-item__title-link" to="post">
          {{item.title}}
        </page-link>
      </h2>
    </header>
    <page-text class="post-item__body">
      <span v-html="item.text"></span>
    </page-text>
    <footer class="post-item__footer"></footer>
  </div>
</template>

<script>
  import PageDate from '@/components/PageDate.vue'
  import PageText from '@/components/PageText.vue'
  import PageLink from '@/components/PageLink.vue'

  export default {
    name: 'PostItem',
    props: ['item'],
    components: {
      PageDate,
      PageText,
      PageLink
    }
  }
</script>

<style lang="stylus">
  .post-item
    display block

    &__header
      margin-bottom 1rem

    &__title
      margin 0

    &__title
    &__title-link
      transition color .2s ease-out, border .2s ease-out

      &:hover
        text-decoration none

    &__footer
      display flex

</style>

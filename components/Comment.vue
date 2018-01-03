<template>
  <div class="comment">
    <section class="comment__body">
      <header class="comment__header">
        <avatar class="comment__avatar" :url="item.author.avatar_url">{{ item.author.name }}</avatar>
        <page-link class="comment__author"></page-link>
        <date class="comment__date" :time="item.created_at"></date>
        <page-link class="comment__id">#</page-link>
      </header>
      <page-text class="comment__text">
        <slot></slot>
      </page-text>
    </section>
    <section class="comment__responses">
      <slot name="responses"></slot>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Comment',
    props: ['item'],
    components: {}
  }
</script>

<style lang="stylus">
  .comment
    display block

    &__body
      overflow: hidden;
      position: relative;
      padding-left: 3rem;

    &__avatar
      margin-right .5rem
      position absolute
      left 0
      top 0

      display block
      width 2rem
      height 2rem

    &__author
      font-size 1rem

    &__header
      margin-bottom 1rem

    &__date
      display block

</style>

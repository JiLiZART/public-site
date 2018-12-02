<template>
  <div class="post-list">
    <post-item class="post-list__item" v-for="item in items" :key="item.id" :item="item"></post-item>
  </div>
</template>

<script>
  import PostItem from '@/components/PostItem.vue'

  export default {
    name: 'PostList',
    props: ['items'],
    components: {
      PostItem
    }
  }
</script>

<style lang="stylus">
  $ctx = post-list

  .{$ctx}
    display block
    max-width 630px
    margin-top: 1rem

    .{$ctx}__item
      margin-bottom 2rem
</style>

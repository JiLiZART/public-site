<template>
  <div class="avatar">
    <img :src="url" :alt="name" class="avatar__image" />
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    props: ['url', 'name']
  }
</script>

<style lang="stylus">
  $ctx = avatar

  .{$ctx}
    display inline-block
    border-radius 50%

    .{$ctx}__image
      min-width 100%
      min-height 100%
      width 100%
      border-radius 100%

    &--size-m
      width 36px
      height 36px

      .{$ctx}__image
        width 36px
        height 36px
        border-radius 18px
</style>

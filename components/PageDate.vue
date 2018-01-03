<template>
  <time class="date" :datetime="time">
    <span class="date__label"> {{ time }}</span>
  </time>
</template>

<script>
  export default {
    name: 'PageDate',
    props: ['time'],
    components: {}
  }
</script>

<style lang="stylus">
  .date
    display inline-block
    font-size 0.8125rem
    line-height 1.125rem
    text-transform lowercase
    color rgba(black, .7)

    &__icon
      font-size inherit

    &__label
      display inline-block
      vertical-align top

</style>

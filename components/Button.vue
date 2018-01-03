<template>
  <button class="button" type="button"><slot></slot></button>
</template>

<script>
  export default {
    name: 'Button',
    props: {},
    components: {}
  }
</script>

<style lang="stylus">
  $ctx = btn

  .{$ctx}
    font-size 1rem
    line-height 1.5rem

    position: relative;

    display: inline-block;

    margin: 0;
    padding: 0 .825rem;

    min-height 2rem
    user-select: none;

    color: #000;
    border: 0;
    border-radius: 3px;
    outline: 0;
    background: rgba(0, 0, 0, 0.2);

    text-align: center;
    text-decoration: none;
    white-space: nowrap;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover
      cursor pointer
      background: rgba(0, 0, 0, 0.3);

    &:disabled
      background: rgba(0, 0, 0, 0.08);

    &--plain
      background: #f6f5f3;

      &:active
        background: #f6f5f3;

      &:disabled
        background: none;

    &--submit
      background: #ffdb4d;

      &:hover
        background: #ffd633;

      &:active
        background: #ffcc00;

    &--size-m
      font-size: .875rem;
      line-height: 1.5rem;

</style>

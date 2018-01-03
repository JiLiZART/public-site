<template>
  <div class="page__text">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'PageText',
    props: ['text'],
    components: {}
  }
</script>


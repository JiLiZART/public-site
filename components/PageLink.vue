<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="page__link">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'PageLink',
    props: {
      href: {type: String}
    },
    components: {}
  }
</script>

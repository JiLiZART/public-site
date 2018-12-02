<template>
  <post-list :items="posts"></post-list>
</template>

<script>
  import PostList from '@/components/PostList.vue'

  export default {
    components: {
      PostList
    },

    computed: {
      posts() {
        return this.$store.state.posts
      }
    }
  }
</script>

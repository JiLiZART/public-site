import Vuex from 'vuex'
// import slugify from 'slugify'
// import fm from 'front-matter'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      posts: [
        {
          id: '123',
          title: 'Rich Hickey recently announced that transducers are going to be added to Clojure, and it prompted',
          created_at: 'november 05, 2016',
          text: `
            <p>Rich Hickey recently announced that transducers are going to be added to Clojure, and it prompted quite a bit of  discussion. After a somewhat brief announcement, Hickey followed up with a couple videos that describe transducers in much more detail: Transducers and Inside Transducers + more.async</p>
            <p>Transducers are a very powerful concept that can be utilized in almost any language. In fact, they have been ported to various other languages including JavaScript (1 and 2), Python, Ruby, Java, and Go.</p>
            <p>And now…transducers are available in PHP via transducers.php!</p>
          `
        },
        {
          id: '124',
          title: 'Transducers in PHP',
          created_at: 'november 05, 2016',
          text: `
            <p>Rich Hickey recently announced that transducers are going to be added to Clojure, and it prompted quite a bit of  discussion. After a somewhat brief announcement, Hickey followed up with a couple videos that describe transducers in much more detail: Transducers and Inside Transducers + more.async</p>
            <p>Transducers are a very powerful concept that can be utilized in almost any language. In fact, they have been ported to various other languages including JavaScript (1 and 2), Python, Ruby, Java, and Go.</p>
            <p>And now…transducers are available in PHP via transducers.php!</p>
          `
        }
      ]
    },
    mutations: {
      increment(state) {
        state.counter++
      }
    },
    actions: {
      nuxtServerInit() {
        // if (process.server) {
        //   const fs = require('fs')
        //   const files = fs.readdirSync('blog')
        //   const posts = files.map((file) => {
        //     let post = fm(fs.readFileSync(`blog/${file}`, 'utf8'))
        //
        //     post.filename = file
        //     post.created = new Date(fs.statSync(`blog/${file}`).ctime)
        //     post.slug = slugify(file.replace(/\.md$/, ''), {lower: true})
        //     post.url = `/blog/${post.slug}`
        //
        //     console.log('load post', post.url)
        //
        //     return post
        //   })
        //
        //   this.dispatch('loadPosts', posts)
        // }
      },
      loadPosts({commit}, posts) {
        const sorted = posts.sort((a, b) => {
          if (a === b) {
            return 0
          }
          return (a.created < b.created) ? 1 : -1
        })
        commit('updatePosts', sorted)
      },
      loadPost({commit}, slug) {
        const post = this.state.posts.find((post) => {
          return post.slug === slug
        })
        commit('updatePost', post)
      }
    }
  })
}

export default createStore

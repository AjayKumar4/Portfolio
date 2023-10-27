<template>
  <article class="blog" :class="{ active: isActive }" data-page="blog">
    <header>
      <h2 class="h2 article-title">Blog</h2>
    </header>
    <section class="blog-posts"></section>
    <BlogList :blogs="blogs" />
  </article>
</template>

<script>
import BlogList from '../components/BlogList.vue'

import { blogs } from '../data/blogs'

export default {
  components: {
    BlogList
  },
  data() {
    return {
      blogs
    }
  }
}
</script>

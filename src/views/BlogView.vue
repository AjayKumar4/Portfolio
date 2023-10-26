<template>
  <article class="blog" data-page="blog">
    <header>
      <h2 class="h2 article-title">Blog</h2>
    </header>
    <section class="blog-posts"></section>
    <BlogList :blogs="blogs" />
  </article>
</template>

<script setup lang="ts">
import BlogList from '../components/BlogList.vue'

import { blogs } from '../data/blogs'
</script>

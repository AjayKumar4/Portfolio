<template>
  <article class="portfolio" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>
    <section class="projects"></section>
    <FilterList :categories="categories" />
    <ProjectList :projects="projects" />
  </article>
</template>

<script setup lang="ts">
import FilterList from '../components/FilterList.vue'
import ProjectList from '../components/ProjectList.vue'

import { categories } from '../data/categories'
import { projects } from '../data/projects'
</script>

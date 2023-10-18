<template>
  <section class="skills">
    <h3 class="h3 skills-title">My skills</h3>
    <ul class="skills-list has-scrollbar">
      <li class="skills-item" v-for="(tech, index) in technologies" :key="index">
        <img :src="tech.image" :alt="tech.name" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    technologies: Array
  }
}
</script>

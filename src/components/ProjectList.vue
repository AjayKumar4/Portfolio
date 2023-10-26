<template>
  <ul class="project-list">
    <li class="project-item active" v-for="(project, index) in projects" :key="index">
      <a :href="project.link">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img :src="project.image" :alt="project.title" loading="lazy" />
        </figure>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-category">{{ project.category }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    projects: Array
  }
}
</script>

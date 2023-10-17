<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <ion-icon name="book-outline"></ion-icon>
      </div>
      <h3 class="h3 clients-title">Experience</h3>
    </div>
    <ol class="timeline-list">
      <li class="timeline-item" v-for="(item, index) in experiences" :key="index">
        <h4 class="h4 timeline-item-title">{{ item.company }}</h4>
        <span>{{ item.year }}</span>
        <p class="timeline-text" v-for="(desc, idx) in item.description" :key="idx">• {{ desc }}</p>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  props: {
    experiences: Array
  }
}
</script>

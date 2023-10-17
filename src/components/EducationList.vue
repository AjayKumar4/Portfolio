<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <ion-icon name="book-outline"></ion-icon>
      </div>
      <h3 class="h3 clients-title">Education</h3>
    </div>
    <ol class="timeline-list">
      <li class="timeline-item" v-for="(item, index) in educations" :key="index">
        <h4 class="h4 timeline-item-title">{{ item.school }}</h4>
        <span>{{ item.year }}</span>
        <p class="timeline-text">{{ item.degree }}</p>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  props: {
    educations: Array
  }
}
</script>

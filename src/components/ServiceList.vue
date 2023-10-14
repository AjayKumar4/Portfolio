<template>
  <section class="service">
    <h3 class="h3 service-title">What I'm Doing</h3>
    <ul class="service-list">
      <li v-for="(service, index) in services" :key="index" class="service-item">
        <div class="service-icon-box">
          <img :src="service.iconSrc" :alt="service.iconAlt" :width="service.iconWidth" />
        </div>
        <div class="service-content-box">
          <h4 class="h4 service-item-title">{{ service.title }}</h4>
          <p class="service-item-text">{{ service.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    services: Array,
  },
};
</script>

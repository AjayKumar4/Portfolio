<template>
  <article class="about  active" data-page="about">
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>
    <section class="about-text">
      <p> {{ summary }} </p>
      </section>
      <ServiceList :services="services" />
      <TestimonialList :testimonials="testimonials" />
  </article>
</template>

<script>
import ServiceList from '../components/ServiceList.vue'
import TestimonialList from '../components/TestimonialList.vue'

export default {
  props: {
    summary: String,
    services: Array,
    testimonials: Array,
  },
  components: {
    ServiceList,
    TestimonialList,
  },
}
</script>
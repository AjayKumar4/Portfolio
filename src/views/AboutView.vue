<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>
    <section class="about-text">
      <p>{{ summary }}</p>
    </section>
    <ServiceList :services="services" />
    <TestimonialList :testimonials="testimonials" />
    <TestimonialModel :testimonials="testimonials" />
    <ClientList :clients="clients" />
  </article>
</template>

<script>
import ServiceList from '../components/ServiceList.vue'
import TestimonialList from '../components/TestimonialList.vue'
import TestimonialModel from '../components/TestimonialModel.vue'
import ClientList from '../components/ClientList.vue'

export default {
  props: {
    summary: String,
    services: Array,
    testimonials: Array,
    clients: Array,
  },
  components: {
    ServiceList,
    TestimonialList,
    TestimonialModel,
    ClientList,
  }
}
</script>

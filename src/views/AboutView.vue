<template>
  <article class="about" :class="{ active: true }" data-page="about">
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>
    <section class="about-text">
      <p>{{ profiles.summary }}</p>
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

import { profiles } from '../data/profiles'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { clients } from '../data/clients'

export default {
  components: {
    ServiceList,
    TestimonialList,
    TestimonialModel,
    ClientList
  },
  data() {
    return {
      profiles,
      services,
      testimonials,
      clients
    }
  }
}
</script>

<template>
  <section class="testimonials">
    <h3 class="h3 testimonials-title">Testimonials</h3>
    <ul class="testimonials-list has-scrollbar">
      <li class="testimonials-item" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <img
              :src="testimonial.avatarSrc"
              :alt="testimonial.name"
              :width="testimonial.avatarWidth"
              style="border-radius: 18px"
              data-testimonials-avatar
            />
          </figure>
          <h4 class="h4 testimonials-item-title" data-testimonials-title>{{ testimonial.name }}</h4>
          <div style="display: none" data-testimonials-date>{{ testimonial.date }}</div>
          <div class="testimonials-text" data-testimonials-text>
            <p>{{ testimonial.testimonialText }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import TestimonialModel from './TestimonialModel.vue'

export default {
  props: {
    testimonials: Array
  }
}
</script>

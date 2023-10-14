<template>
  <div class="modal-container" data-modal-container>
    <div class="overlay" data-overlay></div>
    <section class="testimonials-modal">
      <button class="modal-close-btn" data-modal-close-btn>
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <div class="modal-img-wrapper">
        <figure class="modal-avatar-box">
          <img :src="testimonials.avatarSrc" :alt="testimonials.name" style="border-radius: 18px" :width="testimonial.quoteAvatarWidth" data-modal-img>
        </figure>
        <img :src="testimonials.quoteIconSrc" alt="quote icon">
      </div>
      <div class="modal-content">
        <h4 class="h3 modal-title" data-modal-title>{{ testimonials.name }}</h4>
        <time :datetime="testimonials.date">{{ testimonials.date }}</time>
        <div data-modal-text>
          <p>{{ testimonials.testimonialText }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: Object,
  },
};
</script>

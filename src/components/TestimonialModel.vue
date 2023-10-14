<template>
  <div class="modal-container" data-modal-container>
    <div class="overlay" data-overlay></div>
    <section class="testimonials-modal">
      <button class="modal-close-btn" data-modal-close-btn>
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <div class="modal-img-wrapper">
        <figure class="modal-avatar-box">
          <img
            :src="currentTestimonial.avatarSrc"
            :alt="currentTestimonial.name"
            style="border-radius: 18px"
            :width="currentTestimonial.quoteAvatarWidth"
            data-modal-img
          />
        </figure>
        <img :src="currentTestimonial.quoteIconSrc" alt="quote icon" />
      </div>
      <div class="modal-content">
        <h4 class="h3 modal-title" data-modal-title>{{ currentTestimonial.name }}</h4>
        <time :datetime="currentTestimonial.date" data-modal-date>{{
          currentTestimonial.date
        }}</time>
        <div data-modal-text>
          <p>{{ currentTestimonial.testimonialText }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: Array
  },
  computed: {
    currentTestimonial() {
      return this.testimonials[0]
    }
  },
  mounted() {
    // testimonials variables
    const testimonialsItem = document.querySelectorAll('[data-testimonials-item]')
    const modalContainer = document.querySelector('[data-modal-container]')
    const modalCloseBtn = document.querySelector('[data-modal-close-btn]')
    const overlay = document.querySelector('[data-overlay]')

    // modal variable
    const modalImg = document.querySelector('[data-modal-img]')
    const modalTitle = document.querySelector('[data-modal-title]')
    const modalText = document.querySelector('[data-modal-text]')
    const modalDate = document.querySelector('[data-modal-date]')

    // modal toggle function
    const testimonialsModalFunc = function () {
      modalContainer.classList.toggle('active')
      overlay.classList.toggle('active')
    }

    // add click event to all modal items
    for (let i = 0; i < testimonialsItem.length; i++) {
      testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML
        modalDate.innerHTML = this.querySelector('[data-testimonials-date]').innerHTML

        testimonialsModalFunc()
      })
    }

    // add click event to modal close button
    modalCloseBtn.addEventListener('click', testimonialsModalFunc)
    overlay.addEventListener('click', testimonialsModalFunc)
  }
}
</script>

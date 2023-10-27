<template>
  <article class="contact" :class="{ active: isActive }" data-page="contact">
    <header>
      <h2 class="h2 article-title">Contact</h2>
    </header>

    <section class="mapbox" data-mapbox>
      <figure>
        <iframe :src="maps.url" width="400" height="300" loading="lazy"></iframe>
      </figure>
    </section>

    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <form action="#" class="form" data-form>
        <div class="input-wrapper">
          <input
            type="text"
            name="fullname"
            class="form-input"
            placeholder="Full name"
            required
            data-form-input
          />

          <input
            type="email"
            name="email"
            class="form-input"
            placeholder="Email address"
            required
            data-form-input
          />
        </div>

        <textarea
          name="message"
          class="form-input"
          placeholder="Your Message"
          required
          data-form-input
        ></textarea>

        <button class="form-btn" type="submit" disabled data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>

<script>
import { maps } from '../data/maps'

export default {
  data() {
    return {
      maps
    }
  },
  mounted() {
    // contact form variables
    const form = document.querySelector('[data-form]')
    const formInputs = document.querySelectorAll('[data-form-input]')
    const formBtn = document.querySelector('[data-form-btn]')

    // add event to all form input field
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener('input', function () {
        // check form validation
        if (form.checkValidity()) {
          formBtn.removeAttribute('disabled')
        } else {
          formBtn.setAttribute('disabled', '')
        }
      })
    }
  }
}
</script>

<!--
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>  
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />  

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
-->

<template>
  <div class="main-content">
    <NavBar :navItems="navItems" />
    <AboutView :summary="summary" :services="services" :testimonials="testimonials" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import AboutView from './AboutView.vue'
import navbarData from '../data/navbar.json'
import serviceData from '../data/services.json'
import profileData from '../data/profile.json'
import testimonialData from '../data/testimonials.json'

export default {
  components: {
    NavBar,
    AboutView
  },
  data() {
    return {
      navItems: navbarData,
      services: serviceData,
      summary: profileData.summary,
      testimonials: testimonialData
    }
  }
}
</script>

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
  <SideBar
    :avatarSrc="avatarSrc"
    :name="name"
    :title="title"
    :avatarWidth="avatarWidth"
    :contactsData="contactsData"
    :socialsData="socialsData"
  />
  <div class="main-content">
    <NavBar :navItems="navItems" />
    <AboutView
      :summary="summary"
      :services="services"
      :testimonials="testimonials"
      :clients="clients"
    />
    <ResumeView :educations="educations" :experiences="experiences" />
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import AboutView from './AboutView.vue'
import ResumeView from './ResumeView.vue'

import contactData from '../data/contact.json'
import socialData from '../data/social.json'
import profileData from '../data/profile.json'
import navbarData from '../data/navbar.json'
import serviceData from '../data/service.json'
import testimonialData from '../data/testimonial.json'
import clientData from '../data/client.json'
import educationData from '../data/education.json'
import experienceData from '../data/experience.json'
import skillData from '../data/skill.json'

export default {
  components: {
    SideBar,
    NavBar,
    AboutView,
    ResumeView
  },
  data() {
    return {
      contactsData: contactData,
      socialsData: socialData,
      avatarSrc: profileData.avatarSrc,
      name: profileData.name,
      title: profileData.title,
      avatarWidth: profileData.avatarWidth,
      navItems: navbarData,
      services: serviceData,
      summary: profileData.summary,
      testimonials: testimonialData,
      clients: clientData,
      educations: educationData,
      experiences: experienceData,
      skills: skillData
    }
  }
}
</script>

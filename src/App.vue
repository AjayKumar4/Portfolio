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
  <HomeView />
</template>

<script>
import SideBar from './components/SideBar.vue'
import HomeView from './views/HomeView.vue'
import contactData from './data/contacts.json'
import socialData from './data/socials.json'
import profileData from './data/profile.json'

export default {
  components: {
    SideBar,
    HomeView
  },
  data() {
    return {
      contactsData: contactData,
      socialsData: socialData,
      avatarSrc: profileData.avatarSrc,
      name: profileData.name,
      title: profileData.title,
      avatarWidth: profileData.avatarWidth,
    }
  }
}
</script>

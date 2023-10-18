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
    :avatarSrc="profiles.avatarSrc"
    :name="profiles.name"
    :title="profiles.title"
    :avatarWidth="profiles.avatarWidth"
    :contactsData="contacts"
    :socialsData="socials"
  />
  <div class="main-content">
    <NavBar :navItems="navbars" />
    <AboutView />
    <ResumeView />
    <ContactView />
  </div>
</template>

<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import AboutView from './AboutView.vue'
import ResumeView from './ResumeView.vue'
import ContactView from './ContactView.vue'

import contacts from '../data/contacts'
import socials from '../data/socials'
import profiles from '../data/profiles'
import navbars from '../data/navbars'
</script>

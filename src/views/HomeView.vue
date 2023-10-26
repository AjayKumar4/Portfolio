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
  <SideBar />
  <div class="main-content">
    <NavBar />
    <AboutView />
    <ResumeView />
    <PortfolioView />
    <ContactView />
  </div>
</template>

<script setup lang="ts">
import SideBar from './SideBarView.vue'
import NavBar from './NavBarView.vue'
import AboutView from './AboutView.vue'
import ResumeView from './ResumeView.vue'
import ContactView from './ContactView.vue'
import PortfolioView from './PortfolioView.vue'
</script>

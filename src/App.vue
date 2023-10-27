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

<template>
  <SideBarView />
  <div class="main-content">
    <NavBarView />
    <router-view />
  </div>
</template>

<script>
import NavBarView from './views/NavBarView.vue'
import SideBarView from './views/SideBarView.vue'

export default {
  components: {
    NavBarView,
    SideBarView
  }
}
</script>
-->

<template>
  <HomeView />
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  components: {
    HomeView
  }
}
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item" v-for="(navbar, index) in navbars" :key="index">
        <button class="navbar-link" :class="{ active: navbar.active }" data-nav-link>
          {{ navbar.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { navbars } from '../data/navbars'
</script>

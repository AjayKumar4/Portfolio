<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item" v-for="(item, index) in navItems" :key="index">
        <button class="navbar-link" :class="{ active: item.active }" data-nav-link>
          {{ item.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navItems: Array
  },
};
</script>

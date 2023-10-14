<template>
  <ul class="social-list">
    <li v-for="(social, index) in socials" :key="index" class="social-item">
      <a :href="social.link" class="social-link">
        <ion-icon :class="social.iconClass" :name="social.iconName"></ion-icon>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    socials: Array
  },
};
</script>

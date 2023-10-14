<template>
  <ul class="contacts-list">
    <li v-for="(contact, index) in contacts" :key="index" class="contact-item">
      <div class="icon-box">
        <ion-icon :name="contact.iconName"></ion-icon>
      </div>
      <div class="contact-info">
        <p class="contact-title">{{ contact.title }}</p>
        <a :href="contact.link" class="contact-link">{{ contact.value }}</a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    contacts: Array
  },
};
</script>

<template>
  <aside class="sidebar" data-sidebar>
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img :src="avatarSrc" :alt="name" :width="avatarWidth" />
      </figure>
      <div class="info-content">
        <h1 class="name" :title="name">{{ name }}</h1>
        <p class="title">{{ title }}</p>
      </div>
      <button class="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>
    <div class="sidebar-info_more">
      <div class="separator"></div>
      <ContactList :contacts="contactsData" />
      <div class="separator"></div>
      <SocialList :socials="socialsData" />
    </div>
  </aside>
</template>

<script>
import ContactList from './ContactList.vue'
import SocialList from './SocialList.vue'

export default {
  props: {
    avatarSrc: String,
    name: String,
    title: String,
    avatarWidth: String,
    contactsData: Array,
    socialsData: Array
  },
  components: {
    ContactList,
    SocialList
  },
};
</script>

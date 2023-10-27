<template>
  <aside class="sidebar" data-sidebar>
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img :src="profiles.avatarSrc" :alt="profiles.name" :width="profiles.avatarWidth" />
      </figure>
      <div class="info-content">
        <h1 class="name" :title="profiles.name">{{ profiles.name }}</h1>
        <p class="title">{{ profiles.title }}</p>
      </div>
      <button class="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>
    <div class="sidebar-info_more">
      <div class="separator"></div>
      <ContactList :contacts="contacts" />
      <div class="separator"></div>
      <SocialList :socials="socials" />
    </div>
  </aside>
</template>

<script>
import ContactList from '../components/ContactList.vue'
import SocialList from '../components/SocialList.vue'

import { contacts } from '../data/contacts'
import { socials } from '../data/socials'
import { profiles } from '../data/profiles'

export default {
  components: {
    ContactList,
    SocialList
  },
  data() {
    return {
      contacts,
      socials,
      profiles
    }
  },
  mounted() {
    // element toggle function
    const elementToggleFunc = (elem) => {
      elem.classList.toggle('active')
    }

    // sidebar variables
    const sidebar = document.querySelector('[data-sidebar]')
    const sidebarBtn = document.querySelector('[data-sidebar-btn]')

    // sidebar toggle functionality for mobile
    sidebarBtn.addEventListener('click', () => {
      elementToggleFunc(sidebar)
    })
  }
}
</script>

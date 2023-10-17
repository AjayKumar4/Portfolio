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
  mounted() {
    // page navigation variables
    const navigationLinks = document.querySelectorAll('[data-nav-link]')
    const pages = document.querySelectorAll('[data-page]')

    // add event to all nav link
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener('click', function () {
        for (let i = 0; i < pages.length; i++) {
          if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
            pages[i].classList.add('active')
            navigationLinks[i].classList.add('active')
            window.scrollTo(0, 0)
          } else {
            pages[i].classList.remove('active')
            navigationLinks[i].classList.remove('active')
          }
        }
      })
    }
  }
}
</script>

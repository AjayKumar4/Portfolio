import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ResumeView from '../views/ResumeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView
  },
  {
    path: '/about',
    name: 'about',
    components: AboutView
  },
  {
    path: '/resume',
    name: 'resume',
    components: ResumeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    components: PortfolioView
  },
  {
    path: '/blog',
    name: 'blog',
    components: BlogView
  },
  {
    path: '/contact',
    name: 'contact',
    components: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/IndexView.vue'),
    },
    {
      path: '/skills.sh',
      name: 'skills',
      component: () => import('@/views/SkillsView.vue'),
    },
    {
      path: '/work.sh',
      name: 'work',
      component: () => import('@/views/WorkView.vue'),
    },
    {
      path: '/contact.sh',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
  ],
})

export default router

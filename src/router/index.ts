import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      props: (route) => ({ page: route.query.e }),
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/events',
      name: 'EventList',
      props: (route) => ({ page: parseInt(route.query.page as string) || 1 }),
      component: () => import('../views/EventList.vue')
    },
    {
      path: '/event/:id',
      name: 'EventDetails',
      props: true,
      component: () => import('../views/event/EventDetails.vue')
    },
    {
      path: '/event/:id/register',
      name: 'EventRegister',
      props: true,
      component: () => import('../views/event/EventRegister.vue')
    },
    {
      path: '/event/:id/edit',
      name: 'EventEdit',
      props: true,
      component: () => import('../views/event/EventEdit.vue')
    },
    {
      path: '/counter',
      name: 'Counter',
      props: { showExtra: true },
      component: () => import('../views/CounterView.vue')
    }
  ]
})

export default router

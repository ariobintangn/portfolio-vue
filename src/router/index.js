import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import TestView from '../views/TestView.vue'
import ChatView from '../views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project/:id',
      name: 'project',
      component: WorkView,
      props: true
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
      props: true
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
      props: true
    }
  ],
  scrollBehavior(){
    return {top:0}
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Table from '@/components/Table.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cases',
    component: Table,
    props: true
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Cases from '@/views/CasesView.vue';
import Vaccines from '@/views/VaccinesView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cases',
    component: Cases,
    props: true
  },
  {
    path: '/vaccines',
    name: 'vaccines',
    component: Vaccines,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router

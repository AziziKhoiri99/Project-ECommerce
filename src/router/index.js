import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fashion from '../views/Fashion.vue'
import Elektronik from '../views/Elektronik.vue'
import Kecantikan from '../views/Kecantikan.vue'
import Smartphone from '../views/Smartphone.vue'
import Profil from '../views/Profil.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fashion',
    name: 'Fashion',
    component: Fashion
  },
  {
    path: '/kecantikan',
    name: 'Kecantikan',
    component: Kecantikan
  },
  {
    path: '/elektronik',
    name: 'Elektronik',
    component: Elektronik
  },
  {
    path: '/smartphone',
    name: 'Smartphone',
    component: Smartphone
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/reg',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/dc',
    name: 'Dc',
    component: () => import('../views/Dc.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import('../views/Link.vue')
  },
  {
    path: '/costumer',
    name: 'Costumer',
    component: () => import('../views/Costumer.vue')
  },
  {
    path: '/beli',
    name: 'Barang',
    component: () => import('../views/Barang.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../views/auth'
import registration from '../views/registration'
import main from '../views/main'
import login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: auth

  },
  {
    path: '/registration',
    name: 'Registration',
    component: registration

  },
  {
    path: '/main',
    name: 'Main',
    component: main

  },
  {
    path: '/login',
    name: 'Login',
    component: login

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

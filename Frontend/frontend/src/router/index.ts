import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import MeusDados from '../views/menu/MeusDados.vue'
import ExemploDeRota from '../views/menu/ExemploDeRota.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
  {
    path: '/meus dados',
    name: 'meus-dados',
    component: MeusDados,
  },
  {
    path: '/Exemplo De Rota',
    name: 'ExemploDeRota',
    component:ExemploDeRota,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

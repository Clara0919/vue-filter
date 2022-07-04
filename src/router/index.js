import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cultureDetailView from '../views/cultureDetailView'
import experienceDetailView from '../views/experienceDetailView'
import jobDetailView from '../views/jobDetailView'
import filterView from '../views/filterView'
import LoginView from '../views/LoginView'
import companyView from '../views/companyView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cultureDetail',
    name: 'cultureDetail',
    component: cultureDetailView
  },
  {
    path: '/experienceDetail',
    name: 'experienceDetail',
    component: experienceDetailView
  },
  {
    path: '/jobDetail',
    name: 'jobDetail',
    component: jobDetailView
  },
  {
    path: '/filter',
    name: 'filter',
    component: filterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/company',
    name: 'company',
    component: companyView
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

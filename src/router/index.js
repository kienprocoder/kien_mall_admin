import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from "../views/DashboardView.vue";
import AboutView from "../views/AboutView.vue";
import DepartmentView from "../views/DepartmentView.vue";

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: DashboardView,
    children: [
      {
        name: 'home',
        path: '/home',
        component: HomeView
      },
      {
        name: 'department',
        path: '/department',
        component: DepartmentView
      },
      {
        name: 'about',
        path: '/about',
        component: AboutView
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

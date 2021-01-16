import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/edit_picture/:id',
        name: 'edit_picture',
        component: () => import('../views/EditPicture.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

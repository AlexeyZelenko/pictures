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
        component: () => import('../views/DetailsPicture.vue')
    },
    {
        path: '/add_picture',
        name: 'add_picture',
        component: () => import('../views/AddPicture.vue')
    },
    {
        path: '/list_picture',
        name: 'list_picture',
        component: () => import('../views/ListPictures.vue')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../views/EditPictures.vue')
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

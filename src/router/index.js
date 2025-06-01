import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Lawyers from '../pages/Lawyers.vue'
import Reviews from '../pages/Reviews.vue'
import Services from '../pages/Services.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/lawyers', component: Lawyers },
    { path: '/reviews', component: Reviews },
    { path: '/services', component: Services },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
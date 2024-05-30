import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/about', component: () => import("@/pages/About.vue")},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
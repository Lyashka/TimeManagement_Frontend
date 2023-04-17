import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../pages/Auth.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Auth',
            component: Auth
        },
        {

        }
    ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../pages/Auth.vue'
import Reg from '../pages/Reg.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Auth',
            component: Auth
        },
        {
            path: '/registration',
            name: 'Reg',
            component: Reg
        }
    ]
})

export default router
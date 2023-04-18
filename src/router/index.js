import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../pages/Auth.vue'
import Reg from '../pages/Reg.vue'
import Main_menu from '../pages/Main_menu.vue'


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
        },
        {
            path: '/mainMenu',
            name: 'MainManu',
            component: Main_menu
        }
    ]
})

export default router
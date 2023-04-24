import axios from 'axios'
import {defineStore} from 'pinia'

const url = 'http://localhost:8080/api/user'
export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: []
    }),

    getters: {
       
    },

    actions: {
        getUser(email, password) {
            console.log(email, password);
            // email = 'merzlyaha@mail.ru'
            axios.get(`http://localhost:8080/api/user?email=${email}&password=${password}`
            ).then(res => console.log(res));
        },
    }
})
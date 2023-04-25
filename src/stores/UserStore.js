import axios from 'axios'
import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: [],
        notFoundUser: ''
    }),

    getters: {
       
    },

    actions: {
        getUser(email, password) {
            axios.get(`http://localhost:8080/api/user?email=${email}&password=${password}`
            ).then(res => { 
                if(res.data == ''){
                    this.notFoundUser = 'Неверный email или пароль'
                    }else{
                    console.log(res.data)
                    this.user = res.data
                    this.notFoundUser = ''
                    window.location.href = '/mainMenu'
                    localStorage.setItem('user', JSON.stringify(this.user))
                } 
            });
        },
    }
})
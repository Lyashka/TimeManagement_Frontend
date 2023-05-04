import axios from 'axios'
import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: [],
        notFoundUser: '',
        toDoList: [],
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
                    // console.log(res.data)
                    this.user = res.data
                    this.notFoundUser = ''
                    window.location.href = '/mainMenu'
                    localStorage.setItem('user', JSON.stringify(this.user))
                } 
            });
        },
        sortToDoList(today_User_toDoList){ 
            this.toDoList = today_User_toDoList.sort((prev, next) => {
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return -1;
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return 1;
            })
        },
        sortContent(ListContent){
            ListContent.sort((prev, next) => {
                if (prev.completed_status < next.completed_status) return -1;
                if (prev.completed_status < next.completed) return 1;
            })
        },

        setToDoList() {
            this.toDoList = []
            this.user[0].to_do_list.forEach(item => {
                if (item.date_start.substr(0,10).replace(/(\d{4})-(\d{2})-(\d{2})/g,"$3.$2.$1") === new Date().toLocaleDateString()) {
                    this.toDoList.push(item)
                //   console.log(this.toDoList);
                }
              });
              this.sortToDoList(this.toDoList)
              localStorage.setItem('toDoList', JSON.stringify(this.toDoList))
        },
        sortList(){
            this.toDoList.sort((prev, next) => {
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return -1;
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return 1;
            })
        }
    }
})
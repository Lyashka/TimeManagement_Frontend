import axios from 'axios'
import { async } from 'jshint/src/prod-params';
import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: [],
        notFoundUser: '',
        toDoList: [],
        newToDoList: {},
    }),

    getters: {
       
    },

    actions: {
        async getUser(email, password) {
            console.log(email, password);
            await axios.get(`http://localhost:8080/api/user?email=${email}&password=${password}`
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

        sortToDoList(today_User_toDoList){ 
            this.toDoList = today_User_toDoList.sort((prev, next) => {
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return -1;
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return 1;
            })
        },

        sortContent(ListContent){
            console.log(ListContent);
            this.toDoList.forEach(e => {
                if(e.to_do_list_id == ListContent.case_content_id) {
                    e.content.sort((prev, next) => {
                            if (prev.completed_status < next.completed_status) return -1;
                            if (prev.completed_status < next.completed) return 1;
                        })
                }
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
        },
        async today_addTo_do_list(){
            let checkEmit = true
            this.toDoList.forEach(e => {
                if(e.list_name == '')
                checkEmit = false
            })
            
            if(checkEmit == true){
                await axios.post('http://localhost:8080/api/user/new-to-do-list', {
                    "date_start": new Date().toLocaleDateString(),
                    "list_name": "",
                    "user_id": this.user[0].user_id,
                    "completed_status_to_do_list": "no"
                }).then(res => {
                    if(res.status == 200){
                        console.log(res);
                        // временный вызов всех данных
                        this.getUser(this.user[0].email, this.user[0].password)
                    }
                })
            }
            else{
                return
            } 
            localStorage.setItem('user', JSON.stringify(this.user))
        },
        async today_updateTo_do_list(new_list_name, listItem){
            console.log(listItem);
            await axios.put('http://localhost:8080/api/user/new-to-do-list', {
                "date_start": new Date().toLocaleDateString(),
                "list_name": new_list_name, 
                "user_id": this.user[0].user_id,
                "to_do_list_id": listItem.to_do_list_id,
                "completed_status_to_do_list": listItem.completed_status_to_do_list
            })
            this.sortList()
            console.log(listItem);
            // временный вызов всех данных
            // this.getUser(this.user[0].email, this.user[0].password)
            localStorage.setItem('user', JSON.stringify(this.user[0]))
        } 
    }
})
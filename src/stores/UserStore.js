import axios from 'axios'
import {defineStore} from 'pinia'


export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: [],
        notFoundUser: '',
        toDoList: [],
        dataEvents:[],


        calendar_data_list:[],

        dayToDoListItem: {},
        dayToDoListDate: '',
        dayToDoListId: '',
        dayToDoList: [],

        checkTodayOrMonth: false,
        checkStatusAddNewToDoList: false,
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

        async repeatGetUser(email, password) {
            console.log(email, password);
            await axios.get(`http://localhost:8080/api/user?email=${email}&password=${password}`
            ).then(res => { 
                if(res.data == ''){
                    }else{
                    this.user = res.data
                    // this.notFoundUser = ''
                    localStorage.setItem('user', JSON.stringify(res.data))
                    this.user = JSON.parse(localStorage.getItem('user'))
                } 
            });
        },

        sortListDay(calendar_data_list){
            this.dayToDoList = calendar_data_list.sort((prev, next) => {
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return -1;
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return 1;
            })
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
            this.user = JSON.parse(localStorage.getItem('user'))
            this.dayToDoList = []
            this.user.to_do_list.forEach(item => {
                if (item.date_start.substr(0,10).replace(/(\d{4})-(\d{2})-(\d{2})/g,"$3.$2.$1") === new Date().toLocaleDateString()) {
                    console.log(true);
                    this.dayToDoList.push(item)
                }
              });
              console.log('F');
              console.log(this.dayToDoList);
              
              localStorage.setItem('toDoList', JSON.stringify(this.calendar_data_list))
        },
        sortList(){
            this.toDoList.sort((prev, next) => {
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return -1;
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return 1;
            })
        },

        // async today_addTo_do_list(){ 
        //     // this.calendar_data_list = []
        //     this.checkStatusAddNewToDoList = true
        //     console.log(new Date().toLocaleDateString());
        //     let checkEmit = true
        //     this.calendar_data_list.forEach(e => {
        //         if(e.list_name == '')
        //         checkEmit = false
        //     })
            
        //     if(checkEmit == true){
        //         this.user.calendar_data_list = []
        //         this.user.calendar_data_list.forEach(e => {
        //             if(new Date().toLocaleDateString() == e.date_start.substr(0,10).replace(/(\d{4}).(\d{2}).(\d{2})/g,"$3.$2.$1")) {
        //                 console.log(e);
        //                 this.calendar_data_list.push(e)
        //                 // console.log(e);
        //             }})


        //         console.log(this.user);
        //         await axios.post('http://localhost:8080/api/user/new-to-do-list', {
        //             "date_start": new Date().toLocaleDateString(),
        //             "list_name": "",
        //             "user_id": this.user.user_id,
        //             "completed_status_to_do_list": "no"
        //         }).then(res => {
        //                 this.repeatGetUser(this.user.email, this.user.password)
        //             this.calendar_data_list.push({
        //                     "to_do_list_id": this.user.to_do_list[this.user.to_do_list.length - 1].to_do_list_id + 1,
        //                     "date_start": new Date().toLocaleDateString(),
        //                     "list_name": "",
        //                     "user_id": this.user.user_id,
        //                     "completed_status_to_do_list": "no",

        //             //     "to_do_list_id": this.user.to_do_list[this.user.to_do_list.length - 1].to_do_list_id + 1,
        //             //     "date_start": '2023-05-18T00:00:00.000Z',
        //             //     "list_name": "",
        //             //     // "user_id": this.user.user_id,
        //             //     "completed_status_to_do_list": "no",
        //             //     "content": []
        //             })
        //             console.log(this.calendar_data_list);

        //             this.repeatGetUser(this.user.email, this.user.password)




        //             localStorage.setItem('user', JSON.stringify(this.user))
        //             this.user = JSON.parse(localStorage.getItem('user'))
        //         })
        //     }
        //     else{
        //         return
        //     } 
           
        // },
        // async today_updateTo_do_list(new_list_name, listItem){
        //     this.checkStatusAddNewToDoList = true
        //     console.log(listItem);
        //     console.log(new_list_name);
        //     await axios.put('http://localhost:8080/api/user/new-to-do-list', {
        //         "date_start": listItem.date_start,
        //         "list_name": new_list_name, 
        //         "user_id": this.user.user_id,
        //         "to_do_list_id": listItem.to_do_list_id,
        //         "completed_status_to_do_list": listItem.completed_status_to_do_list
        //     }).then(res => {
        //         console.log(res);
        //         this.calendar_data_list.forEach(e => {
        //             if (e.to_do_list_id == listItem.to_do_list_id) {
        //                 e.completed_status_to_do_list = listItem.completed_status_to_do_list
        //                 e.list_name = listItem.list_name
        //             }
        //         })
        //         this.repeatGetUser(this.user.email, this.user.password)
        //         // localStorage.setItem('user', JSON.stringify(this.user))
        //         this.user = JSON.parse(localStorage.getItem('user'))
        //     })
        // },
        

        async addTo_do_list_on_calendar(){

            this.checkStatusAddNewToDoList = true
            this.dayToDoListItem = {}
            let checkEmit = true
            console.log(this.dayToDoListDate);

            this.calendar_data_list.forEach(e => {
                if(e.list_name == '')
                checkEmit = false
            })

            if(checkEmit == true){
                await axios.post('http://localhost:8080/api/user/new-to-do-list', {
                    "date_start": this.dayToDoListDate,
                    "list_name": "",
                    "user_id": this.user.user_id,
                    "completed_status_to_do_list": "no"
                }).then(res => {
                    if(res.status == 200){

                        
                        this.calendar_data_list.push({
                            "to_do_list_id": this.user.to_do_list[this.user.to_do_list.length - 1].to_do_list_id + 1,
                            "date_start": this.dayToDoListDate,
                            "list_name": "",
                            "user_id": this.user.user_id,
                            "completed_status_to_do_list": "no",
                        })
                        
                    }})}
                    this.repeatGetUser(this.user.email, this.user.password)
                    console.log(this.user);
                    this.setToDoList()
                    // console.log(this.user.to_do_list[this.user.to_do_list.length - 1].to_do_list_id);


            //         }
            //         localStorage.setItem('user', JSON.stringify(this.user))
            //         this.user = JSON.parse(localStorage.getItem('user'))

            //         console.log(this.user.to_do_list [this.user.to_do_list.length - 1]); 
            //         this.dayToDoListItem = this.user.to_do_list[this.user.to_do_list.length - 1] 
            //         this.updateTo_do_list_on_calendar(this.dayToDoListItem.list_name)
            //     })
            //     this.dayToDoList.push({
            //         "to_do_list_id": this.dayToDoListItem.to_do_list_id,
            //         "date_start": this.dayToDoListDate,
            //         "list_name": "",
            //         "user_id": this.user.user_id,
            //         "completed_status_to_do_list": "no",
                   
            //     })  
                
            // }
            // else{
            //     return
            // } 
        },
        async updateTo_do_list_on_calendar(value_list_name){
            // console.log(this.checkStatusAddNewToDoList );
            // console.log(value_list_name);
            // console.log(this.dayToDoListDate);
            console.log(this.dayToDoListItem);


            await axios.put('http://localhost:8080/api/user/new-to-do-list', {
                "date_start": this.dayToDoListDate,
                "list_name": value_list_name, 
                "user_id": this.user.user_id,
                "to_do_list_id": this.dayToDoListItem.to_do_list_id,
                "completed_status_to_do_list": this.dayToDoListItem.completed_status_to_do_list
            }).then(res => {
                // console.log(res);
                // this.user.to_do_list.forEach(e => {
                //     if (e.to_do_list_id == this.dayToDoListItem.to_do_list_id) {
                //         e.completed_status_to_do_list = this.dayToDoListItem.completed_status_to_do_list
                //         e.list_name = this.dayToDoListItem.list_name
                //     }
                // })
            })
            // this.repeatGetUser(this.user.email, this.user.password)
            // localStorage.setItem('user', JSON.stringify(this.user))
            // this.user = JSON.parse(localStorage.getItem('user'))
            if (this.checkStatusAddNewToDoList == true) {
                this.dataEvents.push({
                    'id': this.dayToDoListItem.to_do_list_id,
                    'title': value_list_name,
                    'start': this.dayToDoListDate,
                })
                this.repeatGetUser(this.user.email, this.user.password)
            }
            else if(this.checkStatusAddNewToDoList == false){
                this.dataEvents.forEach(e => {
                    if (e.id == this.dayToDoListItem.to_do_list_id) {
                        e.title = value_list_name
                        console.log(value_list_name);
                        console.log(e);
                        console.log(this.user);
                    }
                })
                this.repeatGetUser(this.user.email, this.user.password)
            }
            this.checkStatusAddNewToDoList = false
            

            

            // })

            // this.dataEvents.push({
            //     'title': new_list_name,
            //     'start': this.dayToDoListDate
            // })
            // this.dayToDoListItem.list_name = ''
        },


        async removeTo_do_list_on_calendar(){
            
        }
    }
})
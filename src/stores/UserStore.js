import axios from 'axios'
import {defineStore} from 'pinia'

import Chart from 'chart.js/auto'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        theme: 'light',

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

        purpose_array: [],

        allevents: '',
        completedEvents: '',
        notCompletedEvents: '',

        myChart: ''
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
                    console.log(this.user);
                } 
            });
            await this.sortListDay(this.calendar_data_list)
        },

        sortListDay(calendar_data_list){
            this.sortListDay_onId(calendar_data_list)
            this.calendar_data_list = calendar_data_list.sort((prev, next) => {
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return -1;
                if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return 1;
            })
        },
        sortListDay_onId(calendar_data_list){
            this.calendar_data_list = calendar_data_list.sort((prev, next) => {
                if (prev.to_do_list_id < next.to_do_list_id) return -1;
                if (prev.to_do_list_id < next.to_do_list_id) return 1;
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

       async setToDoList() {
            this.user = JSON.parse(localStorage.getItem('user'))
            await this.repeatGetUser(this.user.email, this.user.password);
            this.calendar_data_list = []
            this.user.to_do_list.forEach(item => {

                if (item.date_start.substr(0,10).replace(/(\d{4})-(\d{2})-(\d{2})/g,"$3.$2.$1") === this.dayToDoListDate.replace(/(\d{4})-(\d{2})-(\d{2})/g,"$3.$2.$1")) {
                    console.log(item);    
                    this.calendar_data_list.push(item)
                }
              });
              console.log(this.calendar_data_list);
              localStorage.setItem('toDoList', JSON.stringify(this.calendar_data_list))
              await this.sortListDay(this.calendar_data_list)
        },








        // sortList(){
        //     this.toDoList.sort((prev, next) => {
        //         if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return -1;
        //         if (prev.completed_status_to_do_list < next.completed_status_to_do_list) return 1;
        //     })
        // },
        
        async addTo_do_list_on_calendar(){
            if(this.user.to_do_list = []){
                this.checkEmtyToDoList = true
            }

            this.checkStatusAddNewToDoList = true
            this.dayToDoListItem = {}
            let checkEmit = true

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
                })

                await this.repeatGetUser(this.user.email, this.user.password);

                if(this.user.to_do_list !== []){
                    this.calendar_data_list.push({
                        "to_do_list_id": this.user.to_do_list[this.user.to_do_list.length - 1].to_do_list_id + 1,
                        "date_start": this.dayToDoListDate,
                        "list_name": "",
                        "user_id": this.user.user_id,
                        "completed_status_to_do_list": "no",
                    })
                }
                    await this.repeatGetUser(this.user.email, this.user.password);
                   

                }


                    this.setToDoList()
                    await this.sortListDay(this.calendar_data_list)
        },
        async updateTo_do_list_on_calendar(value_list_name){
            console.log(this.calendar_data_list);

            await axios.put('http://localhost:8080/api/user/new-to-do-list', {
                "date_start": this.dayToDoListDate,
                "list_name": value_list_name, 
                "user_id": this.user.user_id,
                "to_do_list_id": this.dayToDoListItem.to_do_list_id,
                "completed_status_to_do_list": this.dayToDoListItem.completed_status_to_do_list
            }).then(res => {
               
            })
            await this.repeatGetUser(this.user.email, this.user.password)
            this.setToDoList()
            if (this.checkStatusAddNewToDoList == true) {
                this.dataEvents.push({
                    'id': this.dayToDoListItem.to_do_list_id,
                    'title': value_list_name,
                    'start': this.dayToDoListDate,
                })
            }
            else if(this.checkStatusAddNewToDoList == false){
                this.dataEvents.forEach(e => {
                    if (e.id == this.dayToDoListItem.to_do_list_id) {
                        e.title = value_list_name
                    }
                })

                this.calendar_data_list.forEach(e => {
                                if (e.to_do_list_id == this.dayToDoListItem.to_do_list_id) {
                                    e.completed_status_to_do_list = this.dayToDoListItem.completed_status_to_do_list
                                }
                            })
            }
            this.repeatGetUser(this.user.email, this.user.password)
            this.checkStatusAddNewToDoList = false
        },


        async removeTo_do_list_on_calendar(list){
            if(list.content !== []){
                console.log('fff');
            }
            console.log(list);
            await axios.delete(`http://localhost:8080/api/user/new-to-do-list/${list.to_do_list_id}`)
            
            if(list.content !== []){
                
            }

            this.calendar_data_list = this.calendar_data_list.filter((item) => item.to_do_list_id !== list.to_do_list_id)

            console.log(this.dataEvents.length);
            this.dataEvents = this.dataEvents.filter((item) => item.id !== list.to_do_list_id)
            console.log(this.dataEvents.length);
            this.repeatGetUser(this.user.email, this.user.password)
        },





        async sortPurpose() {
            this.sortPurpose_onId()
            this.purpose_array.sort((prev, next) => {
                if (prev.completed_status < next.completed_status) return -1;
                if (prev.completed_status < next.completed_status) return 1;
            })
        },
        sortPurpose_onId(){
            this.purpose_array.sort((prev, next) => {
                if (prev.purp_id < next.purp_id) return -1;
                if (prev.purp_id < next.purp_id) return 1;
            })
        },

        async getPurpose() {
            await axios.get(`http://localhost:8080/api/user/purpose/${this.user.user_id}`)
            .then(res => {
                this.purpose_array = res.data
                console.log(res.data);
            })
            await this.sortPurpose()
        },

        async createPurpose() {
            let checkEmit = false
            this.purpose_array.forEach(e => {
                if(e.purp_name == '') {
                    checkEmit = true
                }
            })

            if(checkEmit == false){
                await axios.post(`http://localhost:8080/api/user/purpose`, {
                    "purp_name": "",
                    "date_create": new Date().toLocaleDateString(),
                    "completed_status": "no",
                    "date_completed": new Date().toLocaleDateString(),
                    "user_id": this.user.user_id
                }).then(res => {
                    console.log(res); 
                })
                await this.getPurpose()
            }
            
        },

        async updatePurpose(item) {
            await axios.put(`http://localhost:8080/api/user/purpose`,{
                "purp_name": item.purp_name,
                "date_create": item.date_create.replace(/(\d{4})-(\d{2})-(\d{2})/g,"$3-$2-$1"),
                "completed_status": item.completed_status,
                "date_completed": item.date_completed.replace(/(\d{4})-(\d{2})-(\d{2})/g,"$3-$2-$1"),
                "purp_id": item.purp_id
            })
            await this.getPurpose()
        },

        async deletePurpose(item) {
            await axios.delete(`http://localhost:8080/api/user/purpose/${item.purp_id}`)
            .then(res => {
                console.log(res);
            })
            await this.getPurpose()
        },



        async updateChart(myChart) {

            let events_arr = []

            const TodayDate = new Date()
            const month = TodayDate.getMonth() + 1;
            const year = TodayDate.getFullYear();
            const formattedDate = `${month}.${year}`
    
            this.user.to_do_list.forEach(e => {
                let otherDate = new Date(`${e.date_start}`)
                let month2 = otherDate.getMonth() + 1; 
                let year2 = otherDate.getFullYear();
                let dateUserEvent = `${month2}.${year2}`
                
                if(dateUserEvent == formattedDate) {
                    events_arr.push(e)
                }
            })
             console.log(events_arr);
           
            console.log(myChart.data);
            this.completedEvents = events_arr.filter(item => item.completed_status_to_do_list == 'yes')
            this.notCompletedEvents = events_arr.filter(item => item.completed_status_to_do_list == 'no')

            this.allevents = events_arr
            console.log(this.allevents);

            console.log(this.completedEvents.length);
            myChart.data.datasets[0].data.push(this.completedEvents.length, this.notCompletedEvents.length)
            console.log(myChart.data.datasets[0].data);
            myChart.update();
        },
    }
})






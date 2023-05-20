<template>
    <div>
        <div v-show="modal_window">

        </div>
        <MainMenu_header></MainMenu_header>
        <FullCalendar class="calendar_container" v-bind:options="options">
            <template v-slot:eventContent='arg'>
                <label class="title_item">{{ arg.event.title }}</label>
            </template>
        </FullCalendar>

        <Calendar_item v-if="calendarItemShow" class="zindex_calendar_item">
            <!-- <div class="calendar_item"> -->
                <div>
                    <div class="top_bar_list_calendar">
                        <To_do_list_btns_for_calendar></To_do_list_btns_for_calendar>
                        <button @click="closeCalendarItem">Click me</button>
                    </div>
                    <MainMenu_main_today_ltemList v-for="list of this.userStore.calendar_data_list" :key="list.to_do_list_id" :list="list">

                    </MainMenu_main_today_ltemList>
                 </div>
                
            <!-- </div> -->
        </Calendar_item>
    </div>
</template>

<script>
        import { reactive } from 'vue'
        import '@fullcalendar/core'
        import FullCalendar from '@fullcalendar/vue3'
        import dayGridPlugin from '@fullcalendar/daygrid'
        import timeGridPlugin from '@fullcalendar/timegrid'
        import listPlugin from '@fullcalendar/list'
        import interationPlugin from '@fullcalendar/interaction'

        import MainMenu_header from '../components/MainMenu_header.vue'
        import MainMenu_main_container from '../components/MainMenu_main_container.vue'
        import Calendar_item from '../components/Calendar_item.vue'
        import MainMenu_main_today_ltemList from '../components/MainMenu_main_today_ltemList.vue'
        import To_do_list_btns_for_calendar from '../components/To_do_list_btns_for_calendar.vue'

        import ruLocale from '@fullcalendar/core/locales/ru.cjs'
        import {INITIAL_EVENTS, createEventId} from '../event-utils'
        import { useUserStore } from '../stores/userStore'
      

export default{
    components: {
        FullCalendar, MainMenu_header, MainMenu_main_container, Calendar_item, MainMenu_main_today_ltemList, To_do_list_btns_for_calendar
    },

    data() {
        return {
            calendarItemShow: false,
            // calendar_data_list: [],
            // dataEvents: [],
            options:{
                locale: ruLocale,
                plugins:[dayGridPlugin, timeGridPlugin, interationPlugin],
                initialDate: '2023-05-06',
                headerToolbar: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth, dayGridWeek'
                },
                initialView: 'dayGridMonth',
                selectable: true,
                selectMirror: true,
                edittable: true,
                dayMaxEvents: true,
                weekends: true,
                initialEvents: INITIAL_EVENTS,

                select: this.handleDateSelect,
                eventClick: this.handleEventClick, 
                eventsSet: this.handleEvents,


                events: [],
            },
            
        }
    },

    setup() {
        const userStore = useUserStore();
        console.log( userStore.checkTodayOrMonth );
        return{
            userStore
        }
    },

    methods: {
        handleDateSelect(info) {
            console.log(info.startStr);
            console.log(this.options.events);
            console.log(this.userStore.dayToDoList);
           this.userStore.dayToDoListDate = info.startStr
            
           this.calendarItemShow = true
           this.userStore.calendar_data_list = []
           this.userStore.dayToDoList = []
            // console.log(this.userStore.user.to_do_list);
           this.userStore.user = JSON.parse(localStorage.getItem('user'))
   
                this.userStore.user.to_do_list.forEach(e => {
                if(info.startStr == e.date_start.substr(0,10).replace(/(\d{2})-(\d{2})-(\d{4})/g,"$3-$2-$1")) {
                    this.userStore.calendar_data_list.push(e)
                }
            })
            this.userStore.sortListDay(this.userStore.calendar_data_list)
           
            // console.log(this.userStore.dayToDoList);
            //this.userStore.calendar_data_list
            // console.log(this.userStore.dataEvents);
            // this.userStore.sortListDay(this.userStore.calendar_data_list)
            // console.log(this.userStore.calendar_data_list);  
            
            // console.log(this.calendar_data_list);
        },

        handleEventClick(info) {
            console.log(info);
        },

        handleEvents(){
            this.options.events = this.userStore.dataEvents
        },

        closeCalendarItem() {
            this.calendarItemShow = false
            this.handleEvents()
            this.userStore.calendar_data_list = []
        }
    },

    mounted(){
        this.userStore.user = JSON.parse(localStorage.getItem('user'))
        this.userStore.toDoList = JSON.parse(localStorage.getItem('toDoList'))
        this.userStore.user.to_do_list.forEach(e => {
            let evvent_color = '#E78C76'
            if(e.completed_status_to_do_list == 'yes'){
                evvent_color = '#DAFABB'
            }
            let newEvent = {
                id: e.to_do_list_id,
                title: e.list_name,
                start: e.date_start.substr(0,10).replace(/(\d{2})-(\d{2})-(\d{4})/g,"$3-$2-$1"),
                color:  evvent_color,
                // color: 'rgba(255, 251, 0, 0.153)'
            }
            this.userStore.dataEvents.push(newEvent)
        })
        console.log(this.userStore.dataEvents);
        // this.dataEvents.sort
        // this.options.events.push( {
        //         title: "Event 6666",
        //         start: "2023-05-15"
        //         })
        // console.log(this.options.events);
    }

  
}

</script>

<style scoped>
.calendar_container{
    display: flex;
    width: 100em;
    height: 55em;
    margin-left: auto;
    margin-right: auto;

    z-index: 0;
}
.title_item{
    font-size: 18px;
}
.zindex_calendar_item{
    z-index: 1;
    
}
.calendar_item{
   
}
.btn_bar_for_to_do_list_btn{
    margin-right: 10px;   
}
.top_bar_list_calendar{
display: flex;
justify-content:space-between;
}
</style>
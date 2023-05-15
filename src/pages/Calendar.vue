<template>
    <div>
        <div v-show="modal_window">

        </div>
        <MainMenu_header></MainMenu_header>

        <Calendar_item>
            
        </Calendar_item>

        <FullCalendar class="calendar_container" v-bind:options="options">
            <template>
                <div class="c">
                    SSS
                </div>
            </template>
            <!-- <MainMenu_main_container :events="events" ></MainMenu_main_container> -->
            <template v-slot:eventContent='arg'>
                <label class="title_item">{{ arg.event.title }}</label>
            </template>
        </FullCalendar>
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
        import Calendar_item from '../components/calendar_item.vue'

        import ruLocale from '@fullcalendar/core/locales/ru.cjs'
        import {INITIAL_EVENTS, createEventId} from '../event-utils'
        import { useUserStore } from '../stores/userStore'
      

export default{
    components: {
        FullCalendar, MainMenu_header, MainMenu_main_container, Calendar_item
    },

    data() {
        return {
            dataEvents: [],
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

                events: [
                
            ],
            },
            
        }
    },

    setup() {
        const userStore = useUserStore();
        return{
            userStore
        }
    },

    methods: {
        handleDateSelect(info) {
           
            console.log(info);
            console.log(info.startStr);
            // let title = prompt('Enter new title')
            // let calendarApi = info.view.calendar

            // calendarApi.unselect()

            // if(title) {
            //     calendarApi.addEvent({
            //         id: createEventId(),
            //         title,
            //         start: info.startStr,
            //         end: info.endStr,
            //         allDay: info.allDay
            //     })
            // }
        },

        handleEventClick(info) {
            // console.log('this title');
            // info.event.remove()
        },

        handleEvents(events){
            this.options.events = this.dataEvents
            // console.log(events);
            // let newEvent = {
            //     title: "Event 6666",
            //     start: "2023-05-15"
            //     }
                // this.options.events.push(newEvent)
            // console.log(events);

            // this.dataEvents = events
            // this.dataEvents.forEach(e => {
            //     console.log(e._def.title);
            //     console.log(e._instance.range.start);
            // })
            // console.log(this.dataEvents);

        }
    },

    mounted(){
        this.userStore.toDoList = JSON.parse(localStorage.getItem('toDoList'))
        this.userStore.user = JSON.parse(localStorage.getItem('user'))
        this.userStore.user.to_do_list.forEach(e => {
            let newEvent = {
                title: e.list_name,
                start: e.date_start.substr(0,10).replace(/(\d{2})-(\d{2})-(\d{4})/g,"$3-$2-$1"),
                // color: 'rgba(255, 251, 0, 0.153)'
            }
           this.dataEvents.push(newEvent)
        })

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
}
.title_item{
    font-size: 18px;
    /* background-color: blueviolet; */
}


</style>
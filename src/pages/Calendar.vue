<template>
    <div>
        <div v-show="modal_window">

        </div>
        <MainMenu_header></MainMenu_header>
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
        import ruLocale from '@fullcalendar/core/locales/ru.cjs'
        import {INITIAL_EVENTS, createEventId} from '../event-utils'
export default {
    components: {
        FullCalendar, MainMenu_header, MainMenu_main_container
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
                    right: 'dayGridMonth, dayGridWeek, dayGridDay'
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
                {
                title: "Event 1",
                start: "2023-05-06"
                },
                {
                title: "Event 2",
                start: "2023-05-05"
                }
            ],
            },
            
        }
    },

    // setup() {
    //     const options = reactive({
    //         plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interationPlugin],
    //         initialView: 'dayGridMonth',
    //     })
    //     return{
    //         options
    //     }
    // },
    methods: {
        handleDateSelect(info) {
            console.log(info);
            console.log(info.startStr);
            let title = prompt('Enter new title')
            let calendarApi = info.view.calendar

            calendarApi.unselect()

            if(title) {
                calendarApi.addEvent({
                    id: createEventId(),
                    title,
                    start: info.startStr,
                    end: info.endStr,
                    allDay: info.allDay
                })
            }
        },

        handleEventClick(info) {
            console.log('this title');
            info.event.remove()
        },

        handleEvents(events){
            this.dataEvents = events
            this.dataEvents.forEach(e => {
                console.log(e._def.title);
                console.log(e._instance.range.start);
            })
            console.log(this.dataEvents);
        }
    },

  
}

</script>

<style scoped>
.calendar_container{
    display: flex;
    width: 100em;
    height: 50em;
    margin-left: auto;
    margin-right: auto;
}
.title_item{
    font-size: 18px;
    /* background-color: blueviolet; */
}

</style>
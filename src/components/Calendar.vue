<template>
    <div>
        <FullCalendar v-bind:options="options"/>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import '@fullcalendar/core'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interationPlugin from '@fullcalendar/interaction'

const options = reactive({
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interationPlugin],
    initialView: 'dayGridMonth'
})
</script>

<style>

</style>
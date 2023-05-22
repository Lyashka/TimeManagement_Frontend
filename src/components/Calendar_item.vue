<template>
<div class="calendar_item_container">
    <slot></slot>
</div>
</template>

<script>
import To_do_list_btns_for_calendar from './To_do_list_btns_for_calendar.vue';
export default {
    components: {To_do_list_btns_for_calendar},
    data() {
        return {
            
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.calendar_item_container{
    min-height: 500px;
    width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); 
    background-color: rgb(255, 255, 225);   
    border-radius: 30px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
}



</style>
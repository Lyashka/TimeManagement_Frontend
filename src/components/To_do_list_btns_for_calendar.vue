<template>
    <div class="btn_container">
        <button class="btn_element" @click="add_to_do_list()">Add In calendar</button>
    </div>
</template>

<script>
import { useUserStore } from '../stores/userStore';
export default {
    data() {
        return {
            
        }
    },
    methods: {
        add_to_do_list(){
            console.log(this.userStore.dayToDoListDate);
            
            this.userStore.addTo_do_list_on_calendar()
        }
    },
    setup() {
        const userStore = useUserStore();

        return{
            userStore
        }
    }
}
</script>

<style scoped>
.btn_container{
    margin-left: auto;
    margin-right: auto;
}
</style>
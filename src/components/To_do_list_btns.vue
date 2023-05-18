<template>
    <div class="btn_container">
        <button class="btn_element" @click="add_to_do_list()">Add</button>
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
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    margin-left: 1em; 
}
.btn_element{
    margin-top: 1em;
    height: 50px;
    width: 50px;
}
</style>
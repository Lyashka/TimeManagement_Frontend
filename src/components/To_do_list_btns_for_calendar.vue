<template>
        <div class="btn_container">
            <button class="btn_element" @click="add_to_do_list()">Создать</button>
        </div>
</template>

<script>
import { useUserStore } from '../stores/userStore'; 
import Plus from '../icons/plus.svg' 

export default {
    data() {
        return {
            Plus:Plus,
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
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    margin-right: 17em;


}
.btn_element{
    /* display: flex; */
    background: none;
    border: none;
    font-size: x-large;
    border-radius:5px;
} 
.btn_element:hover {
    background-color:#2c3e5030;
}
</style>
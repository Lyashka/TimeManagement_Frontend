<template>
    <div class="btn_container">
        <button class="btn_element" @click="add_to_do_list()" :class="this.userStore.theme === 'light' ? 'light-theme' : 'dark-theme'"><img :src="plus" alt=""/></button>
    </div>
</template>

<script>
import plus from '../icons/plus.svg'
import { useUserStore } from '../stores/userStore';
export default {

    data() {
        return {
            plus:plus
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
    height: 40px;
    width: 40px;
    background: none;
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: rgba(255, 251, 0, 0.153);
}
.btn_element:hover{ 
    background-color: #FCF9DD;
}
.light-theme{
  color:black;
  background-color: none;
}
.dark-theme{
  background-color: #2e3440;
  color:aliceblue;
}
</style>
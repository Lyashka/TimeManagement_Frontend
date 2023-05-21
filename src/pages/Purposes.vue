<template>
  <div>
    <MainMenu_header></MainMenu_header>
    <div class="main_container_purp">
        <Purpose_container class="purp_container">
            <Purpose_item v-for="item of this.userStore.purpose_array" :key="item.purp_id" :item="item">

            </Purpose_item>
        </Purpose_container>
        <add_purpose_btns class="add_btn"></add_purpose_btns>
    </div>
  </div>
</template>

<script>
import MainMenu_header from '../components/MainMenu_header.vue';
import Purpose_container from '../components/Purpose_container.vue';
import Purpose_item from '../components/Purpose_item.vue'
import { useUserStore } from '../stores/userStore';
import Add_purpose_btns from '../components/Add_purpose_btns.vue';

export default {
    components: {
        MainMenu_header, Purpose_container, Purpose_item, Add_purpose_btns
    },
    data() {
        return {
            
        }
    },
    
    setup() {
        const userStore = useUserStore();
        userStore.user = JSON.parse(localStorage.getItem('user'))
        console.log(userStore.user);
        userStore.getPurpose()

        return {
            userStore
        }
    }

}
</script>

<style scoped>
.main_container_purp{
     
    display: flex;
    flex-direction: row;
    margin-left: 20%;
    margin-right: 20%;
   
    /* align-content: center; */
}
.purp_container{
    display: flex;
    flex-direction: column;
}
.add_btn{
    margin-top: 1em;
    margin-left: 1em;
}

.test{
    width: 300px;
    height: 300px;
    border: 1px solid black
}
</style>
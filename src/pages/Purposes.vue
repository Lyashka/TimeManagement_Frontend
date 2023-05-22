<template>
  <div>
    <MainMenu_header></MainMenu_header> 
    <a class="sideBar_item" href="/mainMenu">На главную</a>
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
.sideBar_item{
    text-decoration: none;
    margin-top: 0.5em;
    height: 2em;
    width: 200px;
    font-size: x-large;
    padding-left: 2.5em;
    display: flex;
    position: absolute;
    align-items: center;
    color: black;
    border-radius: 5px;

}
.sideBar_item:hover{
    background-color: rgba(255, 251, 0, 0.247);
}
.container_purpose{
    display: flex;
    flex-direction: row;
}
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
    border-radius: 30px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
}
.add_btn{
    margin-top: 1em;
    margin-left: 1em;
}
</style>
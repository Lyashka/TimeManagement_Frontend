<template>
  <header class="header_container">
    <div class="left_header_container">
        <img class="img_main_menu" src="" alt="">
        <label class="label_main_menu">BeeWork</label>
    </div>
    <div v-if="userStore.user.length == undefined" class="rigth_container_el">
        <label  class="text_User_Name">{{ userStore.user.user_name }}</label>
        <button class="userBtnPanel"><img class="user_style" :src="User"/></button>
    </div>
  </header>
</template>

<script >
import { useUserStore } from '../stores/userStore';
import User from '../icons/user.svg'
export default {
    data() {
        return {
            User:User
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
.header_container{
    height: 3em;
    background-color: #FCEAA3;
    display: flex;
    align-items: center;
    padding-left: 30px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.100);
    justify-content: space-between;
}
.label_main_menu{
    margin-left: 1em;
    font-size: x-large; 
   
}
.img_main_menu{
    background-color: black;
    height: 2em;
    width: 2em;
}
.userBtnPanel{
    display: flex; 
    margin-right: 1em;
    height: 3em;
    width: 3em;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
}
.left_header_container{
    height: 3em;
    display: flex;
    align-items: center;
    padding-left: 30px;
    justify-content: space-between;
}
.rigth_container_el{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.text_User_Name{
    margin-right: 1em;
    font-size: x-large;
}
.user_style{

}
</style>
<template>
    <div>
        <header class="header_container">
            <div class="left_header_container">
                <img class="img_main_menu" src="" alt="">
                <label class="label_main_menu">BeeWork</label>
            </div>
            <div v-if="userStore.user.length == undefined" class="rigth_container_el">
                <label  class="text_User_Name">{{ userStore.user.user_name }}</label>
                <button class="userBtnPanel" @click="openWindowProfile()"><img class="user_style" :src="User"/></button>
                <div class="container_profile" v-if="this.vision == true">
                    <div class="container_labels_profile">
                        <label class="lable_on_profile">Добрый день {{ this.userStore.user.user_name }}</label>
                        <label>{{ this.userStore.user.email }}</label>
                    </div>
                    <button class="btn_exit" @click="exitInAccount">Выйти</button>
                </div>  
            </div> 
        </header>
    </div>
</template>

<script >
import { useUserStore } from '../stores/userStore';
import User from '../icons/user.svg'
export default {
    data() {
        return {
            User:User,
            vision: false
        }
    },
    methods:{
        openWindowProfile() {
            this.vision = !this.vision
        },
        exitInAccount() {
            localStorage.clear();
            window.location.href = '/'
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
.btn_exit{
    border: none;
    background: none;
    font-size: x-large;
    display: flex;
    margin-bottom: 1em;
    padding-left: 0.5em;
}
.btn_exit:hover{
    background-color: #FCEAA3;
    border-radius: 10px;
}
.container_profile{
    display: flex;
    position: absolute;
    height: 200px;
    width: 300px;
    background-color: #FEF8DF;
    margin-top: 17em;
    margin-right: 13.5em;
    border-radius: 30px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);

    flex-direction: column;
    justify-content: space-between;
    padding-left: 1em;
    padding-top: 1em;
}
.container_labels_profile{
    display: flex;
    flex-direction: column;
    font-size: x-large;
}
.lable_on_profile{
    margin-bottom: 0.5em;
    font-size: x-large;
}
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
.userBtnPanel:hover {
    background-color: #FCF9DD;
    border-radius: 15px;
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
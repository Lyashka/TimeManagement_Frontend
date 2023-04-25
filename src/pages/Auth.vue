<template>
  <MainMenu_header/>
     <AuthContainer>
          <label class="auth_el auth_label">Authorization</label>
          <div>
            <div class="textNotFoundUser">{{ userStore.notFoundUser }}</div>
            <input class="auth_el" type="text" placeholder="Enter your email" v-model="userEmail">
          </div>
          <input class="auth_el" type="password" placeholder="Enter the password" v-model="userPassword">
          <div class="auth_btns_container">
            <button class="auth_el auth_btn" @click.prevent="userStore.getUser(userEmail, userPassword)">Sign in</button>
            <a class="auth_el" href="/registration">registration</a>
        </div>
     </AuthContainer>
</template>

<script setup>
import AuthContainer from '../components/AuthContainer.vue';
import MainMenu_header from '../components/MainMenu_header.vue';
// import { Ref } from 'vue';
import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();
let userEmail
let userPassword


</script>

<style scoped>
  .auth_el{
    margin: auto;
    height: 60px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 20px;
    border-radius: 30px;
  }
  .auth_btn{
    background: none;
    border: none;
  }
  .auth_btn:hover{
    background-color: rgb(228, 228, 228);
  }

  .auth_label{
    font-size: 2.3em;
  }
  input{
    padding-left: 10px;
  }
  .auth_btns_container{
    display: flex;
    flex-direction: column;
  }
  .textNotFoundUser{
    display: flex;
    justify-content: center;
    color: rgb(235, 18, 18)
  }
</style>
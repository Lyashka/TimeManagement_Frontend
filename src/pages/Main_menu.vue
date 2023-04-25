<template>
  <MainMenu_header></MainMenu_header>
  <div class="mainMenu_container">
    <MainMenu_sideBar></MainMenu_sideBar>
    <MainMenu_main>
      
    </MainMenu_main>
  </div>
</template>

<script setup>
import MainMenu_header from '../components/MainMenu_header.vue';
import MainMenu_sideBar from '../components/MainMenu_sideBar.vue';
import MainMenu_main from '../components/MainMenu_main.vue';

import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();
userStore.user[0] = JSON.parse(localStorage.getItem('user'))
console.log(userStore.user[0]);
let date = new Date ()
console.log(date);
</script>

<style scoped>
.mainMenu_container{
  display: flex;
  flex-direction: row;
}
</style>
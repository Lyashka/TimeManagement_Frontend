<template>
  <MainMenu_header></MainMenu_header>
  <div class="mainMenu_container">
    <MainMenu_sideBar></MainMenu_sideBar>
    <MainMenu_main></MainMenu_main>
  </div>
 
  
</template>

<script>
import MainMenu_header from '../components/MainMenu_header.vue';
import MainMenu_sideBar from '../components/MainMenu_sideBar.vue';
import MainMenu_main from '../components/MainMenu_main.vue';
export default {
components:{
  MainMenu_header,
  MainMenu_sideBar,
  MainMenu_main
}

}
</script>

<style scoped>
.mainMenu_container{
  display: flex;
  flex-direction: row;
}
</style>
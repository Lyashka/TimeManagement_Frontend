<template>
  <MainMenu_header></MainMenu_header>
  <div class="mainMenu_container">
    <MainMenu_sideBar></MainMenu_sideBar>
    <MainMenu_main>{{ user }}</MainMenu_main>
  </div>
</template>

<script >
import MainMenu_header from '../components/MainMenu_header.vue';
import MainMenu_sideBar from '../components/MainMenu_sideBar.vue';
import MainMenu_main from '../components/MainMenu_main.vue';

import { useUserStore } from '../stores/userStore';
  export default {
  components:{
    MainMenu_header,
    MainMenu_sideBar,
    MainMenu_main
  },

  data() {
    return {
      user: '',
    }
  },
  

  mounted() {
    const userStore = useUserStore();
    this.user = userStore.user[0]
    console.log(this.user);
  },
}
</script>

<style scoped>
.mainMenu_container{
  display: flex;
  flex-direction: row;
}
</style>
<template>
  <MainMenu_header></MainMenu_header>
  <div class="mainMenu_container">
    <MainMenu_sideBar></MainMenu_sideBar>
    <MainMenu_main_container>
      <MainMenu_main_today_ltemList v-for="list of today_User_toDoList" :list="list" :key="list.id">

      </MainMenu_main_today_ltemList>
     
      {{ today_User_toDoList }}
    </MainMenu_main_container>
  </div>
</template>

<script>
import MainMenu_header from '../components/MainMenu_header.vue';
import MainMenu_sideBar from '../components/MainMenu_sideBar.vue';
import MainMenu_main_container from '../components/MainMenu_main_container.vue';
import MainMenu_main_today_ltemList from '../components/MainMenu_main_today_ltemList.vue';
import { useUserStore } from '../stores/userStore';
export default{
  components:{
    MainMenu_header, MainMenu_sideBar, MainMenu_main_container, MainMenu_main_today_ltemList
  },

  data() {
    return {
      showContent: false
    }
  },

  methods: {
    showContentBar(){
      this.showContent = !this.showContent
    }
  },

  setup() {
    const userStore = useUserStore();
    userStore.user[0] = JSON.parse(localStorage.getItem('user'))

    let today_User_toDoList = []; 
    userStore.user[0].to_do_list.forEach(item => {
      if (item.date_start.substr(0,10).replace(/(\d{4})-(\d{2})-(\d{2})/g,"$3.$2.$1") === new Date().toLocaleDateString()) {
        today_User_toDoList.push(item)
        console.log(item);
      }
    });

    return{
      today_User_toDoList
    }
  }
}
</script>

<style scoped>
.mainMenu_container{
  display: flex;
  flex-direction: row;
}

 
</style>
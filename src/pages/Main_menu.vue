<template>
  <MainMenu_header></MainMenu_header>
  <div class="mainMenu_container">
    <MainMenu_sideBar></MainMenu_sideBar>
    <MainMenu_main_container>
      <!-- <transition-group name="itemList" tag=""> -->
        <MainMenu_main_today_ltemList  v-for="list of this.userStore.calendar_data_list" :key="list.to_do_list_id" :list="list">

        </MainMenu_main_today_ltemList>
      <!-- </transition-group> -->
    </MainMenu_main_container>
    <To_do_list_Buttons></To_do_list_Buttons>
      <Analytics_container class="analitics_container"></Analytics_container>
  </div>
</template>

<script>
import MainMenu_header from '../components/MainMenu_header.vue';
import MainMenu_sideBar from '../components/MainMenu_sideBar.vue';
import MainMenu_main_container from '../components/MainMenu_main_container.vue';
import MainMenu_main_today_ltemList from '../components/MainMenu_main_today_ltemList.vue';
import To_do_list_Buttons from '../components/To_do_list_btns.vue';
import Analytics_container from '../components/Analytics_container.vue';

import { useUserStore } from '../stores/userStore';

export default{
  components:{
    MainMenu_header, MainMenu_sideBar, MainMenu_main_container, MainMenu_main_today_ltemList, To_do_list_Buttons, Analytics_container
  },

  data() { 
    return {
      showContent: false,
      ischecked: false,
    }
  },

  methods: {
    showContentBar(){
      this.showContent = !this.showContent
    },
  },

  mounted() {
  },

  setup() {
    const userStore = useUserStore();
    userStore.user = JSON.parse(localStorage.getItem('user'))
    console.log(userStore.user);
    userStore.setToDoList()

    userStore.checkTodayOrMonth = true
    console.log( userStore.checkTodayOrMonth );
    userStore.dayToDoListDate = new Date().toLocaleDateString()
      // console.log(userStore.dayToDoListDate);

      
      // userStore.calendar_data_list = userStore.dayToDoList
      // userStore.getUser(userStore.user[0].email, userStore.user[0].password)

    return{
      userStore
    }
  }
}
</script>

<style scoped>
.analitics_container{
  display: flex;
  border: 1px solid black;
  margin-top: 1em;
  margin-left: 1em;
  width: 550px;
  max-height: 300px;
}
.mainMenu_container{
  display: flex;
  flex-direction: row;
}

.itemList-item {
  display: inline-block;
  margin-right: 10px;
}
.itemList-enter-active,
.itemList-leave-active {
  transition: all 0.1s ease;
}
.itemList-enter-from,
.itemList-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.itemList-move {
  transition: transform 0.2s ease;
}
.itemList-complete-item {
  transition: all 0.3s ease;
  display: inline-block;
  margin-right: 10px;
}
.itemList-complete-enter-from,
.itemList-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.itemList-complete-leave-active {
  position: absolute;
}


</style>
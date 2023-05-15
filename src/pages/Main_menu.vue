<template>
  <MainMenu_header></MainMenu_header>
  <div class="mainMenu_container">
    <MainMenu_sideBar></MainMenu_sideBar>
    <MainMenu_main_container>
      <transition-group name="itemList" tag="">
        <MainMenu_main_today_ltemList  v-for="list of userStore.toDoList" :list="list" :key="list.to_do_list_id">

        </MainMenu_main_today_ltemList>
      </transition-group>
     
     
      {{ userStore.toDoList }}
    </MainMenu_main_container>
    <MainMenu_edit_to_do_list></MainMenu_edit_to_do_list>
  </div>
</template>

<script>
import MainMenu_header from '../components/MainMenu_header.vue';
import MainMenu_sideBar from '../components/MainMenu_sideBar.vue';
import MainMenu_main_container from '../components/MainMenu_main_container.vue';
import MainMenu_main_today_ltemList from '../components/MainMenu_main_today_ltemList.vue';
import MainMenu_edit_to_do_list from '../components/MainMenu_edit_to_do_list.vue';
import { useUserStore } from '../stores/userStore';

export default{
  components:{
    MainMenu_header, MainMenu_sideBar, MainMenu_main_container, MainMenu_main_today_ltemList, MainMenu_edit_to_do_list, 
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

  setup() {
    const userStore = useUserStore();
    userStore.user = JSON.parse(localStorage.getItem('user'))
    userStore.toDoList = JSON.parse(localStorage.getItem('toDoList'))
      userStore.setToDoList()
      userStore.sortToDoList(userStore.toDoList)
      userStore.checkTodayOrMonth = true
      console.log( userStore.checkTodayOrMonth );

      // userStore.getUser(userStore.user[0].email, userStore.user[0].password)

    return{
      userStore
    }
  }
}
</script>

<style scoped>
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
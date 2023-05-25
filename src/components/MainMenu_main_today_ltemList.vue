<template>
    <div>
        <div class="container_main_item" >
            <button  @click="showContentBar" class="item_list" >
                <input  type="text" v-model="value_list_name" class="main_item" :class="{'checked' : ischecked}" placeholder="Введите значение" :disabled="disabled" >
                <div class="container_undisabled_btn" v-if="disabled == false">
                  <button class="btn_options" @click="saveItemList(this.value_list_name)"><img :src="Save"/></button>
                  <button class="btn_options" @click="deleteItemList(this.value_list_name)"><img :src="Delete"/></button>
                </div>
                  <button class="btn_options" v-else @click="openEditList()"><img :src="Edit"/></button>
               
            </button>
            <input class="checkbox" type="checkbox" v-model="check_status" @click="set_check_status(this.value_list_name)">
        </div>
        
        <div class="container_for_content">
            <!-- <transition-group name="itemContent" tag="div"> -->
                <MainMenu_main_today_itemContent v-for="content of list.content" :key="content.id" v-show="showContent" :content="content" class="content_item">

                </MainMenu_main_today_itemContent>
            <!-- </transition-group> -->
        </div>
    </div>
</template>

<script>
import MainMenu_main_today_itemContent from '../components/MainMenu_main_today_itemContent.vue';
import Delete from '../icons/delete.svg';
import Save from '../icons/save.svg'
import Edit from '../icons/edit.svg'

import { useUserStore } from '../stores/userStore';
export default{
    components:{
        MainMenu_main_today_itemContent
    },
    props:{
        list:{
            list: Object
        }
    },

    data() {
        return {
            showContent: false,
            value_list_name: this.list.list_name, 
            check_status: false,
            ischecked: false,

            Delete:Delete,
            Save:Save,
            Edit:Edit,
            disabled: true,
        }
    },

    methods: {

      openEditList(){
        this.disabled = false
      },

      saveItemList(value_list_name) {            
            this.list.list_name = this.value_list_name
            this.userStore.dayToDoListItem = this.list

  
            console.log(this.userStore.checkEmtyToDoList);

            this.userStore.updateTo_do_list_on_calendar(value_list_name)
            this.disabled = true
      },

      deleteItemList(){
        this.userStore.removeTo_do_list_on_calendar(this.list)
      },

        set_check_status(value_list_name) {
            console.log(this.list.completed_status_to_do_list);
            console.log(this.list);
             
            if (this.list.completed_status_to_do_list == 'yes') {
                        this.list.completed_status_to_do_list = 'no'
                        this.ischecked = false
            } 
            else if (this.list.completed_status_to_do_list == 'no'){
                        this.list.completed_status_to_do_list = 'yes'
                        this.ischecked = true
            } 
            // this.userStore.sortList()

              this.list.list_name = this.value_list_name
            this.userStore.dayToDoListItem = this.list
              this.userStore.updateTo_do_list_on_calendar(value_list_name)
              // this.userStore.updateChart(myChart)
        },
        editTo_do_list(){
          
            
            this.list.list_name = this.value_list_name


            this.userStore.dayToDoListItem = this.list

            console.log(this.userStore.dayToDoListItem);
            if(this.userStore.checkTodayOrMonth == true) {
              this.userStore.today_updateTo_do_list(this.list.list_name, this.list)
            }
            else{
              this.userStore.updateTo_do_list_on_calendar(this.list.list_name)
            }
        }
    },

    setup() {
        const userStore = useUserStore();

        return{
            userStore,
        }
    },
 
    mounted() {
      this.userStore.toDoList = JSON.parse(localStorage.getItem('toDoList'))
      this.userStore.user = JSON.parse(localStorage.getItem('user'))
        if(this.list.completed_status_to_do_list == 'yes'){
            this.check_status = true
            this.ischecked = true
        }else{
            this.check_status = false
            this.ischecked = false
        }

        if(this.list.list_name == ''){
          this.disabled = false
        }
    },
}
</script>

<style scoped>
.container_undisabled_btn{
  display: flex;
  flex-direction: row;
}
.btn_options{
  margin-right: 5px;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  /* font-weight: bolder; */
}
.btn_options:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px
}
.img{
  height: 20px;
  width: 20px;
}


.main_item{
    /* color: wheat; */
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center; 
    border: none;
    background: none;
    font-size: xx-large;
}
.main_item_pointer-events{
  pointer-events:none;
}
.item_list{
  /* color:#fff; */
  width: 100%;
  display: flex;
  font-size: xx-large;
  flex-direction: row;
  border: none;
  background: none;
  padding-left: 5px; 
  align-items: center;
} 
.content_item{
  margin-left: 30px;
  font-size: xx-large;
  display: flex;
  justify-content:space-between;
  align-items: center;
}  

.container_for_content{
    border-bottom: 1px solid rgba(0, 0, 0, 0.150);
}
.checkbox{
    margin-right: 30px;
    height: 2em;
    width: 2em;
}
.container_main_item{
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    align-items: center;
}
.checked{
    color:rgba(0, 0, 0, 0.300);
}


.itemContent-item {
  display: inline-block;
  margin-right: 10px;
}
.itemContent-enter-active,
.itemContent-leave-active {
  transition: all 0.1s ease;
}
.itemContent-enter-from,
.itemContent-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.itemContent-complete-item {
  transition: all 0.3s ease;
  display: inline-block;
  margin-right: 10px;
}
.itemContent-complete-leave-active {
  position: absolute;
}



input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin-right: 20px;
}

input[type="checkbox"] {
  appearance: none;
  background-color: rgba(255, 251, 0, 0.100);;
  margin-right: 2em;
  /* font: inherit; */
  /* color: currentColor; */
  width: 2em;
  height: 2em;
  border: 0.15em solid rgba(0, 0, 0, 0.500);
  border-radius: 0.25em;
  transform: translateY(-0.075em);
}

input[type="checkbox"] {
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 1em;
  height: 1em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]::before {
  background-color: CanvasText;
}

input[type="checkbox"]::before {
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.light-theme{
  color:black;
  background-color: none;
}
.dark-theme{
  background-color: #2e3440;
  color:aliceblue;
}
</style>
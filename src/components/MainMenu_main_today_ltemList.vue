<template>
    <div class="container_main_item" >
        <button  @click="showContentBar" class="item_list" >
            <input type="text" :value="value_list_name" class="main_item" :class="{'checked' : ischecked}">
        </button>
    <input class="checkbox" type="checkbox" v-model="check_status" @click="set_check_status(check_status)">
    </div>
    
    <div class="container_for_content">
          <MainMenu_main_today_itemContent v-for="content of list.content" :key="content.id" v-show="showContent" :content="content" class="content_item">

          </MainMenu_main_today_itemContent>
    </div>
   
</template>

<script>
import MainMenu_main_today_itemContent from '../components/MainMenu_main_today_itemContent.vue';

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
            check_status: '',
            ischecked: false,
        }
    },

    methods: {
        showContentBar(){
            this.showContent = !this.showContent
            this.list.content.sort((prev, next) => {
                if (prev.completed_status < next.completed_status) return -1;
                if (prev.completed_status < next.completed_status) return 1;
            })
        },

        set_check_status(check_status) {
            console.log(check_status);
            // this.check_status = !check_status
            if(this.check_status == true){
                // this.ischecked = true
            }else{ 
                // this.ischecked = false
            }
             
            if (this.list.completed_status_to_do_list == 'yes') {
                this.check_status = true
                // this.userStore.toDoList.forEach(e => {
                    // if (e.to_do_list_id == this.list.to_do_list_id) {
                        this.list.completed_status_to_do_list = 'no'

                        console.log(this.list.completed_status_to_do_list);
                        console.log(this.userStore.toDoList);

                        // this.userStore.sortToDoList(this.userStore.toDoList)
                    // }
                // });
            } else if (this.list.completed_status_to_do_list == 'no'){
                this.check_status = false
                // this.userStore.toDoList.forEach(e => {
                    // if (e.to_do_list_id == this.list.to_do_list_id) {
                        this.list.completed_status_to_do_list = 'yes'

                        console.log(this.list.completed_status_to_do_list);
                        console.log(this.userStore.toDoList);

                        // this.userStore.sortToDoList(this.userStore.toDoList)
                    // }
                // });
            } 
            this.userStore.sortList()
            // console.log(this.userStore.toDoList);
        }
    },

    setup() {
        const userStore = useUserStore();

        /// ????? - это работает для "Сегодня"
        userStore.setToDoList()

        return{
            userStore
        }
    },
 
    mounted() {
        if(this.list.completed_status_to_do_list == 'yes'){
            this.check_status = true
            this.ischecked = true
        }else{
            this.check_status = false
            this.ischecked = false
        }
        
    },
}
</script>

<style scoped>
.main_item{
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center; 
    border: none;
    background: none;
    font-size: xx-large;
}
.item_list{
  width: 100%;
  display: flex;
  font-size: xx-large;
  flex-direction: column;
  border: none;
  background: none;
  padding-left: 5px; 
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
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    align-items: center;
}
.checked{
    /* text-decoration: line-through; */
    color:rgba(0, 0, 0, 0.300);
}
</style>
<template>
    <div class="container_main_item">
        <button  @click="showContentBar" class="item_list" >
        <!-- <div class="main_item"> -->
            <input type="text" :value="value_list_name" class="main_item">
        <!-- {{ list.list_name }} -->
        <!-- </div> -->
    </button>
    <input class="checkbox" type="checkbox">
    </div>
    
    <div class="container_for_content">
          <MainMenu_main_today_itemContent v-for="content of list.content" :key="content.id" v-show="showContent" :content="content" class="content_item">

          </MainMenu_main_today_itemContent>
    </div>
   
</template>

<script>
import MainMenu_main_today_itemContent from '../components/MainMenu_main_today_itemContent.vue';
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
        }
    },

    methods: {
        showContentBar(){
            this.showContent = !this.showContent
        }
    }
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
</style>
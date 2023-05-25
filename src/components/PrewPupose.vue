<template>
  <div class="prewPurpose_container" :class="this.userStore.theme === 'light' ? 'light-theme' : 'dark-theme'">
    <div class="labelMyPupose">
       <label class="lable">Мои цели:</label> 
       <a href="/purpose" class="btn_open_purpose" :class="this.userStore.theme === 'light' ? 'light-theme' : 'dark-theme'">Открыть</a>
    </div> 
    <div v-for="item of this.userStore.purpose_array" :key="item.purp_id">
        <div class="item_style" v-if="item.completed_status == 'no'"><span>{{ item.purp_name }}</span></div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore';

export default {

    setup() {
        const userStore = useUserStore();

        return {
            userStore
        }
    },

    mounted() {
        this.userStore.getPurpose()
        console.log(this.userStore.purpose_array);
    }
}
</script>

<style scoped>
span{
    margin-left: 0.5em;;
}
.prewPurpose_container{
    width: 550px;
    min-height: 350px;
    margin-left: 1em;
    margin-top: 1em;
    border-radius: 30px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
}
.labelMyPupose{
    height: 1.5em;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.200);
    font-size: x-large;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.lable{
    margin-left: 1em;
}

.item_style{
    width: 100%;
    display: flex;
    font-size: x-large;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);

}
.btn_open_purpose{
    text-decoration: none;
    margin-right: 1em;
    border-radius: 5px;
    height: 1em;
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
<template>
    <div v-if="this.content.completed_status == 'no'">
          <input type="text"  class="main_item" :value="value_content">
            <input class="checkbox" type="checkbox" v-model="check_status" @click="set_check_status(check_status)">
    </div>
    <div v-else>
        <input type="text"  class="main_item checked" :value="value_content">
            <input class="checkbox" type="checkbox" v-model="check_status" @click="set_check_status(check_status)">
    </div>
</template>

<script>
export default {
    props:{
        content:{
            content: Object
        }
    },

    data() {
        return {
            value_content: this.content.content,
            check_status: false
        }
    },

    methods: {
        set_check_status(check_status) {
            // console.log(this.content);

            this.check_status = !check_status
            if(this.check_status == true){
                console.log(true);
            }else{
                console.log(false);
            }
        }
    },

    mounted() {
        if(this.content.completed_status == 'yes'){
            this.check_status = true
        }else{
            this.check_status = false
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
.checkbox{
    margin-right: 30px;
    height: 2em;
    width: 2em;
}
.checked{
    /* text-decoration: line-through; */
    color:rgba(0, 0, 0, 0.300);
}
</style>
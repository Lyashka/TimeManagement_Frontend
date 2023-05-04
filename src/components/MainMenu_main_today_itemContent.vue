<template>
    <div >
        <input type="text"  class="main_item" :value="value_content" :class="{'checked' : ischecked}">
        <input class="checkbox" type="checkbox" v-model="check_status" @click="set_check_status()">
    </div>
</template>

<script>

import { useUserStore } from '../stores/userStore';
export default {
    props:{
        content:{
            content: Object
        }
    },

    data() {
        return {
            value_content: this.content.content,
            check_status: false,
            ischecked: false,
        }
    },

    methods: {
        set_check_status() {
            if (this.content.completed_status == 'yes') {
                        this.content.completed_status = 'no'
                        this.ischecked = false
            } 
            else if (this.content.completed_status == 'no'){
                        this.content.completed_status = 'yes'
                        this.ischecked = true
            } 
            this.userStore.sortContent(this.content)
        }
    },

    mounted() {
        if(this.content.completed_status == 'yes'){
            this.check_status = true
            this.ischecked = true
        }else{
            this.check_status = false
            this.ischecked = false
        }
        this.userStore.sortContent(this.content)
    },
    setup() { 
        const userStore = useUserStore();
        return{
            userStore
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
.checkbox{
    margin-right: 30px;
    height: 2em;
    width: 2em;
}
.checked{
    color:rgba(0, 0, 0, 0.300);
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
  margin-right: 1em;
  /* font: inherit; */
  color: currentColor;
  width: 1.8em;
  height: 1.8em;
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
</style>
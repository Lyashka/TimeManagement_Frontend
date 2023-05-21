<template>
  <div class="item_purp">
    <button class="purp_value">
            <input class="input_purp" :class="{'checked' : ischecked}" type="text" v-model="value_list_name" placeholder="Введите значение" :disabled="disabled">
            <div class="btn_not_disabledOnInput" v-if="disabled == false">
                <button class="btn_noneStyle" @click="saveItemPurpose(this.value_list_name)"><img :src="Save"/></button>
                <button class="btn_noneStyle" @click="deleteItemPurpose(this.value_list_name)"><img :src="Delete"/></button>
            </div>
            <button class="btn_noneStyle" v-else @click="openEditList()"><img :src="Edit"></button>
            
    </button>
    <input class="checkbox" type="checkbox" v-model="check_status" @click="set_check_status()">
  </div>
</template>

<script>
import Delete from '../icons/delete.svg';
import Save from '../icons/save.svg'
import Edit from '../icons/edit.svg'

import { useUserStore } from '../stores/userStore';
export default {
    props:{
        item:{
            item: Object
        }
    },

    data() {
        return {
            value_list_name: this.item.purp_name,
            check_status: false,
            ischecked: false,

            disabled: true,
            Delete:Delete,
            Save:Save,
            Edit:Edit,
        }
    },

    mounted() {
        if(this.item.completed_status == 'yes') {
            this.check_status = true
            this.ischecked = true
        }else{
            this.check_status = false
            this.ischecked = false
        }

        if(this.item.purp_name == ''){
            this.disabled = false
        }
    },

    setup() {
        const userStore = useUserStore();

        return{
            userStore 
        }
    },

    methods: {
        openEditList() {
            this.disabled = false
        },

        saveItemPurpose() {
            // console.log(this.check_status);
            this.item.purp_name = this.value_list_name

            console.log(this.item);
            this.userStore.updatePurpose(this.item)
            this.disabled = true
        },

        set_check_status(){
            if (this.item.completed_status == 'yes') {
                        this.item.completed_status = 'no'
                        this.check_status = false
                        this.ischecked = false
            } 
            else if (this.item.completed_status == 'no'){
                        this.item.completed_status = 'yes'
                        this.check_status = true
                        this.ischecked = true
            } 
            this.userStore.updatePurpose(this.item)
        },

        deleteItemPurpose() {
            this.userStore.deletePurpose(this.item)
        }
    },

}
</script>

<style scoped>
.btn_noneStyle{
    border: none;
    background: none;
    margin-right: 5px;
}
.btn_noneStyle:hover{
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px
}
.btn_not_disabledOnInput{
    display: flex;
    flex-direction: row;
}
.item_purp{
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    align-items: center;
}
.purp_value{
    width: 100%;
  display: flex;
  font-size: xx-large;
  flex-direction: row;
  border: none;
  background: none;
  padding-left: 5px; 
  align-items: center;
}
.input_purp{
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
  margin-right: 2em;
  /* font: inherit; */
  color: currentColor;
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

</style>
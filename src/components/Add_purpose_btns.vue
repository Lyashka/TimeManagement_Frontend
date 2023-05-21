<template>
  <div>
    <button class="btn" @click="addPurp()"><img :src="plus"/></button>
  </div>
</template>

<script>
import plus from '../icons/plus.svg'
import { useUserStore } from '../stores/userStore';
export default {

    data() {
        return {
            plus:plus
        }
    },

    methods: {
        addPurp(){
            this.userStore.createPurpose()
        }
    },

    setup() {
        const userStore = useUserStore();
        return {
            userStore
        }
    }

}
</script>

<style scoped>
.btn{
    margin-top: 1em;
    height: 40px;
    width: 40px;
    background: none;
    border-radius: 10px;
    background-color: rgba(255, 251, 0, 0.153);
}
</style>
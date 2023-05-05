<template>
  <MainMenu_header>

  </MainMenu_header>
</template>

<script>
import MainMenu_header from '../components/MainMenu_header.vue';

import { useUserStore } from '../stores/userStore';
export default {
    components: {
        MainMenu_header
    },
    setup() {
        const userStore = useUserStore();
        userStore.user[0] = JSON.parse(localStorage.getItem('user'))
    }

}
</script>

<style>

</style>
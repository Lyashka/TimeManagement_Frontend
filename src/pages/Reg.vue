<template>
  <MainMenu_header/>
    <AuthContainer>
            <label class="reg_el reg_label">Регистрация</label>
            <input class="reg_el" type="text" placeholder="Введите login" v-model="login">
            <input class="reg_el" type="text" placeholder="Введите email" v-model="email">
            <input class="reg_el" type="password" placeholder="Введите пароль" v-model="password">
            <button class="reg_el reg_btn" @click="createUser()">Зарегистрировать</button>
            <a class="reg_el" href="/">Вернуться к авторизации</a>
    </AuthContainer>
</template>

<script>
import axios from 'axios';
import AuthContainer from '../components/AuthContainer.vue';
import MainMenu_header from '../components/MainMenu_header.vue';
import { useUserStore } from '../stores/userStore';

export default {
  components: {
    AuthContainer, MainMenu_header
  }, 
  setup() {
    const userStore = useUserStore();

    return{
      userStore
    }
  },
  data() {
    return {
      login: this.login,
      email: this.email,
      password: this.password,
    }
  },
  methods: {
    async createUser() {
      await axios.post('http://localhost:8080/api/user',{
        "user_name": this.login,
        "email": this.email,
        "password": this.password
      })
      .then(res => {
        if(res.status == 200){
          this.userStore.getUser(this.email, this.password)
        }
      })
    }
  }
}
</script>

<style scoped>
  .reg_el{
    margin: auto;
    height: 60px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 20px;
    border-radius: 30px;
  }
  .reg_label{
    font-size: 2.3em;
  }

  input{
    padding-left: 10px;
  }
  .reg_btn{
    background: none;
    border: none;
    font-size: x-large;
  }
  .reg_btn:hover{
    background-color: rgb(228, 228, 228);
  }
</style>
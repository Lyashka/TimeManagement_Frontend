<template>
  <MainMenu_header/>
    <AuthContainer>
            <label class="reg_el reg_label">Регистрация</label>
            <input class="reg_el" type="text" placeholder="Введите login">
            <input class="reg_el" type="text" placeholder="Введите email">
            <input class="reg_el" type="password" placeholder="Введите пароль">
            <button class="reg_el reg_btn">Зарегистрировать</button>
            <a class="reg_el" href="/">Вернуться к авторизации</a>
    </AuthContainer>
</template>

<script setup>
import AuthContainer from '../components/AuthContainer.vue';
import MainMenu_header from '../components/MainMenu_header.vue';
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
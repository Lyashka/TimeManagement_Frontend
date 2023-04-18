<template>
    <AuthContainer>
            <label class="reg_el reg_label">Registration</label>
            <input class="reg_el" type="text" placeholder="enter your login">
            <input class="reg_el" type="text" placeholder="enter your email">
            <input class="reg_el" type="text" placeholder="enter password">
            <button class="reg_el reg_btn">Sign up</button>
    </AuthContainer>
</template>

<script>
import AuthContainer from '../components/AuthContainer.vue';
export default {
components: {AuthContainer}
}
</script>

<style scoped>
  .reg_el{
    margin: auto;
    height: 60px;
    width: 400px;
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
  }
  .reg_btn:hover{
    background-color: rgb(228, 228, 228);
  }
</style>
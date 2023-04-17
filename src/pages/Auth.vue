<template>
  <div class="home">
     <AuthContainer>
        <div class="sign_in_container">
          <h3 class="auth_el auth_label">Authorization</h3>
          <input class="auth_el" type="text" placeholder="Enter your email">
          <input class="auth_el" type="password" placeholder="Enter the password">
          <div class="auth_btns_container">
            <button class="auth_el auth_btn">Sign in</button>
            <a class="auth_el" href="/registration">registration</a>
          </div>
         
        </div>
     </AuthContainer>
  </div>
</template>

<script>
import AuthContainer from '../components/AuthContainer.vue';
export default {
  components: {AuthContainer}

}
</script>

<style scoped>
  .sign_in_container{
    margin: auto;
    margin-top: 20%;
    padding: auto;
    height: 450px;
    width: 600px;
    border: 1px solid rgba(0, 0, 0, 0.455);
    display: flex;
    flex-direction: column;
  }
  .auth_el{
    margin: auto;
    height: 60px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 20px;
    border-radius: 30px;
  }
  .auth_btn{
    background: none;
    border: none;
  }
  .auth_btn:hover{
    background-color: rgb(228, 228, 228);
  }

  .auth_label{
    font-size: 2.3em;
  }
  input{
    padding-left: 10px;
  }
  .auth_btns_container{
    display: flex;
    flex-direction: column;
  }
</style>
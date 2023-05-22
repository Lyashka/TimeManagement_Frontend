<script setup>

</script>

<template>
  <div class="container_auth">
    <div class="sign_in_container">
        <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container_auth{
    margin: auto;
    margin-top: 80px;
    padding: auto;
    height: 600px;
    width: 700px;
    border-radius: 30px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
}
.sign_in_container{
    margin: auto;
    margin-top: 10%;
    padding-top: 10%;
    height: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

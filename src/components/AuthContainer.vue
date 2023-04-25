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
    border: 1px solid rgba(0, 0, 0, 0.478);
    border-radius: 16px;
}
.sign_in_container{
    margin: auto;
    margin-top: 10%;
    padding: auto;
    height: 450px;
    width: 600px;
    border: 1px solid rgba(0, 0, 0, 0.455);
    display: flex;
    flex-direction: column;
  }
</style>

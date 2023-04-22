<template>
  <header class="header_container">
    <div class="left_header_container">
        <img class="img_main_menu" src="" alt="">
        <label class="label_main_menu">BeeWork</label>
    </div>
     <button class="userBtnPanel">{{  }}</button>
  </header>
</template>

<script>
export default {
    
    }
</script>

<style scoped>
.header_container{
    height: 3em;
    background-color: rgba(255, 251, 0, 0.247);
    display: flex;
    align-items: center;
    padding-left: 30px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.100);
    justify-content: space-between;
}
.label_main_menu{
    margin-left: 1em;
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.img_main_menu{
    background-color: black;
    height: 2em;
    width: 2em;
}
.userBtnPanel{
    display: flex; 
    margin-right: 1em;
    height: 3em;
    width: 3em;
}
.left_header_container{
    height: 3em;
    display: flex;
    align-items: center;
    padding-left: 30px;
    justify-content: space-between;
}
</style>
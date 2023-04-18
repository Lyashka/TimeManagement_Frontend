<template>
  <div class="MainMenu_sideBar">
        <a class="sideBar_item" href="">Календарь</a>
        <a class="sideBar_item" href="">Цели</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.MainMenu_sideBar{
    height: 30em;
    width: 15em;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding-top: 1em;
}
.sideBar_item{
    text-decoration: none;
    height: 2em;
    font-size: 20px;
    padding-left: 0.5em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    color: black;

}
.sideBar_item:hover{
    background-color: rgba(255, 251, 0, 0.247);
}
</style>

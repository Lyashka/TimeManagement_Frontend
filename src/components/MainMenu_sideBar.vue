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
    border-right: 1px solid rgba(0, 0, 0, 0.200);
    display: flex;
    flex-direction: column;
    padding-top: 1em;
}
.sideBar_item{
    text-decoration: none;
    height: 2em;
    font-size: x-large;
    padding-left: 0.5em;
    display: flex;
    align-items: center;
    color: black;

}
.sideBar_item:hover{
    background-color: rgba(255, 251, 0, 0.247);
}
</style>

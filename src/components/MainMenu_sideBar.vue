<template>
  <div class="MainMenu_sideBar">
        <a class="sideBar_item" href="/my_calendar">Календарь</a>
        <a class="sideBar_item" href="/purpose">Цели</a>
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
    /* border-right: 1px solid rgba(0, 0, 0, 0.200); */
    display: flex;
    flex-direction: column;
    padding-top: 1em;
    
}
.sideBar_item{
    text-decoration: none;
    height: 2em;
    font-size: x-large;
    padding-left: 2.5em;
    display: flex;
    align-items: center;
    color: black;
    border-radius: 5px;

}
.sideBar_item:hover{
    background-color: rgba(255, 251, 0, 0.247);
}
</style>

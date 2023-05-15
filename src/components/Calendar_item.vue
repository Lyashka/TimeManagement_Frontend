<template>
<div class="calendar_item_container">
    <slot></slot>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.calendar_item_container{
    min-height: 400px;
    width: 700px;
    border: 1px solid black;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); 

    background-color: rgb(255, 255, 225);
}
</style>
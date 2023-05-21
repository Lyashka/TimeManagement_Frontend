<template>
    <div class="purp_container">
        <div class="purp_label">Цели</div>
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.purp_container{
    /* margin: auto; */
    min-height: 40em;
    width: 60em;
    border: 1px solid black;
    margin-top: 1em;
}
.purp_label{
    font-size: xx-large;
    border-bottom: 1px solid rgba(0, 0, 0, 0.400);
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
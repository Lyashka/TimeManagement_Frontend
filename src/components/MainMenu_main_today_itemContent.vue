<template>
    <div>
          <input type="text"  class="main_item" :value="value_content">
            <input class="checkbox" type="checkbox">
    </div>
  
</template>

<script>
export default {
    props:{
        content:{
            content: Object
        }
    },

    data() {
        return {
            value_content: this.content.content
        }
    },
}
</script>

<style scoped>
.main_item{
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center; 
    border: none;
    background: none;
    font-size: xx-large;
}
.checkbox{
    margin-right: 30px;
    height: 2em;
    width: 2em;
}
</style>
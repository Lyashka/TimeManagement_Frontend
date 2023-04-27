<template>
  <div class="main_container">
    <div class="date_container">
    Cегодня: {{ day }} {{ dateOnNewDate }}
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();

let day
switch (new Date().getDay()) {
  case 1:
    day = 'Понедельник'
    break;
  case 2:
    day = 'Вторник'
    break;
    case 3:
    day = 'Среда'
    break;
    case 4:
    day = 'Четверг'
    break;
    case 5:
    day = 'Пятница'
    break;
    case 6:
    day = 'Суббота'
    break;
    case 7:
    day = 'Воскресенье'
    break;
  default:
    break;
}

let dateOnNewDate = new Date().toLocaleDateString()

  // console.log(userStore.user[0].to_do_list[2].date_start.substr(0,10).replace(/(\d{4})-(\d{2})-(\d{2})/g,"$3.$2.$1"));
  // console.log(new Date().toLocaleDateString());
</script>

<style scoped>
.main_container{
    height: 40em;
    width: 60em;
    border: 1px solid black;
    margin-top: 1em;
    margin-left: 1em;
    border-radius: 30px;
}
.date_container{
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.200);
  display: flex;
  align-items: center;
  font-size: x-large;
  justify-content: center;
}
</style>
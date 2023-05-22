<template>
  <div>
    <canvas id="myChart" width="350" height="350"></canvas>
    <div class="btn_for_diagramm">
      <button>По всем задачам</button>
      <button>за месяц</button>
      <button>За неделю</button>
      <button>за День</button>
    </div>
   
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import { useUserStore } from '../stores/userStore';

export default {

  data() {
    return {
      
    }
  },
  computed: {
    
  },
setup() {
  const userStore = useUserStore();

  

  return {
    userStore
  }
},

methods: {

},

 mounted() {
  const ctx = document.getElementById('myChart')

  const data = {
  labels: [
    'Выполненные',
    'Не выполненные'
  ],
  datasets: [{
    label: 'Задач',
    data: [],
    backgroundColor: [
      'rgb(0, 160, 29)',
      'rgb(255, 99, 132)',
    ],
    hoverOffset: 4
  }]
};
  const options = { 
    plugins:{
      legend: {
        position: 'top',
      },
    },
  }
  const myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options:options,
  })

  this.userStore.updateChart(myChart)
 },

 

};
</script>

<style scoped>
.btn_for_diagramm{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}
</style>
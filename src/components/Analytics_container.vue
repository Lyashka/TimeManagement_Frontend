<template>
  <div class="contsinerOnAnalytics">
    <div>
      <label>За {{ nameMonthToday }}:</label>
      <canvas id="myChart" width="300" height="300"></canvas>
      
    </div>
   <div>
     <label class="lableRigth">За {{ nameMonthPrew }}:</label>
     <canvas id="myChartMonth" width="200" height="200"></canvas> 
   </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import { useUserStore } from '../stores/userStore';

export default {

  data() {
    return {
      nameMonthToday: '',
      nameMonthPrew: '',
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
  onMonth() {
    this.userStore.completedEvents = this.userStore.user.to_do_list.filter(item => item.completed_status_to_do_list == 'no')
    this.userStore.notCompletedEvents = this.userStore.user.to_do_list.filter(item => item.completed_status_to_do_list == 'yes')
    console.log(this.userStore.completedEvents);
    console.log(this.userStore.notCompletedEvents);
    this.userStore.updateChart(myChart)
  }
},

 mounted() {

  const monthToday = new Date().getMonth() + 1
  const monthPrew = new Date().getMonth()
  console.log(monthToday);

  switch (monthToday) {
      case 1:this.nameMonthToday = 'Январь'
      break;
      case 2:this.nameMonthToday = 'Февраль'
      break;
      case 3:this.nameMonthToday = 'Март'
      break;
      case 4:this.nameMonthToday = 'Апрель'
      break;
      case 5:this.nameMonthToday = 'Май'
      break;
      case 6:this.nameMonthToday = 'Июнь'
      break;
      case 7:this.nameMonthToday = 'Июль'
      break;
      case 8:this.nameMonthToday = 'Август'
      break;
      case 9:this.nameMonthToday = 'Сентябрь'
      break;
      case 10:this.nameMonthToday = 'Октябрь'
      break;
      case 11:this.nameMonthToday = 'Ноябрь'
      break;
      case 12:this.nameMonthToday = 'Декабрь'
      break;
      default:
      break;
  }
  switch (monthPrew) {
      case 1:this.nameMonthPrew = 'Январь'
      break;
      case 2:this.nameMonthPrew = 'Февраль'
      break;
      case 3:this.nameMonthPrew = 'Март'
      break;
      case 4:this.nameMonthPrew = 'Апрель'
      break;
      case 5:this.nameMonthPrew = 'май'
      break;
      case 6:this.nameMonthPrew = 'Июнь'
      break;
      case 7:this.nameMonthPrew = 'Июль'
      break;
      case 8:this.nameMonthPrew = 'Август'
      break;
      case 9:this.nameMonthPrew = 'Сентябрь'
      break;
      case 10:this.nameMonthPrew = 'Октябрь'
      break;
      case 11:this.nameMonthPrew = 'Ноябрь'
      break;
      case 12:this.nameMonthPrew = 'Декабрь'
      break;
      default:
      break;
  }


  const TodayDate = new Date()
  const month = TodayDate.getMonth();
  const year = TodayDate.getFullYear();
  const formattedDate = `${month}.${year}`
  // console.log(formattedDate);
  let events_arr = []

  this.userStore.user.to_do_list.forEach(e => {
      let otherDate = new Date(`${e.date_start}`)
      let month2 = otherDate.getMonth() + 1; 
      let year2 = otherDate.getFullYear();
      let dateUserEvent = `${month2}.${year2}`
                  
      if(dateUserEvent == formattedDate) {
            events_arr.push(e)
      }
  })
  let completed = events_arr.filter(item => item.completed_status_to_do_list == 'yes')
  let notCompleted = events_arr.filter(item => item.completed_status_to_do_list == 'no')
  console.log(completed);
  console.log(notCompleted);


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
  


// diagram on month
  const ctxMonth = document.getElementById('myChartMonth')
  const dataMonth = {
  labels: [
    '',
    ''
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
  const optionsMonth = { 
    plugins:{
      legend: {
        position: 'top',
      },
    },
  }
  const myChartMonth = new Chart(ctxMonth, {
    type: 'pie',
    data: dataMonth,
    options: optionsMonth,
  });

  myChartMonth.data.datasets[0].data.push(completed.length, notCompleted.length)
            console.log(myChartMonth.data.datasets[0].data);
            myChartMonth.update();


  },

} 
</script>

<style scoped>
.contsinerOnAnalytics{
  display: flex;
  flex-direction: row;
  align-items: start;
}
label{
  margin-left: 1em;
  font-size: x-large;
}
.lableRigth{
  margin-left: 1.4em;
}
</style>
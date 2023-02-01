import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'


const BarChart = (props) => {



  return (
    <Bar data={props.chartData} />
  )
}

export default BarChart
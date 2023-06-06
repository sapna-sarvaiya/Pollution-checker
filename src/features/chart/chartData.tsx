import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ForecastData } from 'features/weatherTemp/contianer/home';
import { IWeatherChartData } from 'features/weatherTemp/interface/forecast.interface';
  

interface IProps {
    data: IWeatherChartData[]
}

const WeatherChart:React.FC<IProps> = (props) => {
    const {data} = props;
  // Prepare the chart data
  const chartData = {
    labels: data.map((entry: IWeatherChartData ) =>
    moment(entry?.dt_txt).format('MMM DD YY,  h:mm') ),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map((entry : IWeatherChartData) => entry.main.temp),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Set chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 40, // Customize the maximum value on the y-axis if needed
      },
    },
  };

  return (
    <div className=' mb--20 text--white'>
        <Line data={chartData} options={chartOptions} />
    </div>
  )
  
};

export default WeatherChart;
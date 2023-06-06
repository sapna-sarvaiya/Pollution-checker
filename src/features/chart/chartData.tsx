import React from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import { IWeatherChartData } from 'features/weatherTemp/interface/forecast.interface';


interface IProps {
  data: IWeatherChartData[]
}

const WeatherChart: React.FC<IProps> = (props) => {
  const { data } = props;
  // Prepare the chart data
  const chartData = {
    labels: data.map((entry: IWeatherChartData) =>
      moment(entry?.dt_txt).format('MMM DD YY,  h:mm')),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map((entry: IWeatherChartData) => entry.main.temp),
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '	rgb(0,0,0)',
        borderWidth: 1,
      },
      {
        label: 'Humididty (%)',
        data: data.map((entry: IWeatherChartData) => entry.main.humidity),
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgb(139, 0, 0)',
        borderWidth: 1,
      },
      {
        label: 'wind speed (km/h)',
        data: data.map((entry: IWeatherChartData) => entry.wind.speed),
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgb(0, 0, 255)',
        borderWidth: 1,
      },
    ],
  };

  // Set chart options
  const chartOptions = {
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        suggestedMax: 40,
      },
      x: {
        ticks: {
          color: '#000000',
        }
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: "#000000",
        }
      },
      title: {
        display: true,
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
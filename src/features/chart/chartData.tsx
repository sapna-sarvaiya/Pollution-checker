import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

interface WeatherData {
    list: WeatherForecast[],
    // main: { temp: number, pressure: number, humidity: number },
    // wind: { speed: number },
    // weather: [{ description: string }],
    // coord: { lat: number, lon: number }
    // name: string;
}
interface WeatherForecast {
    dt_txt: string;
    main: {
        temp: number;
    }
}
const WeatherChart: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData>({} as WeatherData);
    const [cityName, setCityName] = useState('ahmedabad');

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid={35529732c40e184ca9f1121b0bf00dc8}`
                );
                const data: WeatherData = response.data;
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    if (!weatherData) {
        return <div>Loading weather data...</div>;
    }
    const chartData = {
        labels: weatherData.list.map((data: any) => data.dt_txt),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: weatherData.list.map((data: any) => data.main.temp),
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                lineTension: 0.1,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'hour',
                    displayFormats: {
                        hour: 'MMM D, h A',
                    },
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value: number) => `${value}°C`,
                },
            },
        },
    };
    return (
        <div>
            <h2>Weather Chart</h2>
            <Line data={chartData} options={chartOptions} />
            {/* Render your chart using the weatherData */}
        </div>
    );
};

export default WeatherChart;
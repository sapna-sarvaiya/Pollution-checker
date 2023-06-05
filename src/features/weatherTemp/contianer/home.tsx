import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
// import { ChartData, ChartOptions } from 'chart.js/auto';
import '../../css/home.scss';


interface WeatherData {
  main: { temp: number, pressure: number, humidity: number },
  wind: { speed: number },
  weather: [{ description: string }],
  coord: { lat: number, lon: number }
  name: string;
}

const WeatherApp: React.FC = () => {
  const [cityName, setCityName] = useState('ahmedabad');
  const [weatherData, setWeatherData] = useState<WeatherData>({} as WeatherData);
  const [error, setError] = useState<string | null>(null);
  const d = new Date();
  const dateFormat =
    [d.getHours(),
    d.getMinutes()].join(':');
  console.log(`temperatureData`, weatherData)
  useEffect(() => {
    getTemperatureData()
  }, []);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    getTemperatureData();
    event.preventDefault();
  };
  console.log(`weatherData`, weatherData)
  const getTemperatureData = () => {
    axios
      .get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?&q=${cityName}&units=metric&appid=35529732c40e184ca9f1121b0bf00dc8`)
      .then((response) => {

        const data: WeatherData = response.data;
        console.log(`response`, response)
        setWeatherData(data);
      })
      .catch((error) => {
        toast.error(" please enter valid city");
        console.error(error);
      });
  };

  return (

    <div>
      <div className="container">
        <div id="pot">
          <img src="https://i.stack.imgur.com/qgNyF.png?s=328&g=1" width="100px" height="100px" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="searchBox">
            <input type="search"
              value={cityName}
              onChange={handleInputChange}
              placeholder="Enter city name" autoFocus required />
            <i className="fa fa-search"></i>
          </div>
          {/* <input
            type="text"
            value={cityName}
            onChange={handleInputChange}
            placeholder="Enter city name"
            className='input-width'
          />
          <button type="submit" className='cursor-pointer search-btn '>Search</button> */}
        </form>
        <div className="mid">
          <div className="corner_text">
            <p>N</p>
            <p>W</p>
            <p>E</p>
            <p>S</p>
            <p>|</p>
            <p>|</p>
            <p>|</p>
            <p>|</p>
          </div>
        </div>
        <div className="data">
          <div className="cel">
            <h4>{weatherData?.weather?.[0].description}</h4>
            {/* <p className="date">{date.getHours}</p> */}

            <p className='flex flex--column'><span>{parseInt(String(weatherData?.main?.temp))}°C</span></p>
          </div>
          <div className="max_min">
            <div className="max">
              <p className='flex flex--column'>lat <span>{weatherData?.coord?.lat}</span> </p>
              <hr />
              <p>Humidity <span>{weatherData?.main?.humidity}%</span></p>
            </div>
            <div className="cloud">
              <img src="https://e7.pngegg.com/pngimages/955/496/png-clipart-sun-and-cloud-digital-illustration-weather-forecasting-rain-icon-shower-weather-icon-material-company-cloud.png" alt="">
              </img>	</div>
            <div className="min">
              <p className='flex flex--column'>lon <span>{weatherData?.coord?.lon}</span> </p>
              <hr />
              <p>Pressur <span>{weatherData?.main?.pressure}mm</span></p>
            </div>
          </div>

          <div className="bottom">
            <p className='flex flex--column'>Wind speed <span>{((weatherData?.wind?.speed) * 3.6).toFixed(4)} km/h</span></p>
            <h2>{weatherData.name}</h2>
          </div>
        </div>
      </div >

      {error && <p>{error}</p>}

      {/* {temperatureData ? (
        <div>
          <Line data={temperatureData} options={{} as ChartOptions<"line">} /> 
        </div>
      ) : (
        <p>No temperature data available.</p>
      )} */}
    </div >
  );
};

export default WeatherApp;

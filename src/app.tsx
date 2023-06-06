import { Route, Routes } from 'react-router-dom';

import 'assets/styles/app.scss';

import Layout from 'hoc/layout';
import WeatherApp from 'features/weatherTemp/contianer/home';
import { Toaster } from 'react-hot-toast';
import  ChartApp  from 'features/chart/chartData';

function App() {
	return (
		<Layout className="flex">
			<WeatherApp />
			{/* <ChartApp/> */}
			{/* <WeatherChart /> */}
			<Toaster />
		</Layout>
	);
}

export default App;

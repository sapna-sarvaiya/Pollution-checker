import { Route, Routes } from 'react-router-dom';

import 'assets/styles/app.scss';

import Layout from 'hoc/layout';
import WeatherApp from 'features/weatherTemp/contianer/home';
import { Toaster } from 'react-hot-toast';
import WeatherChart from 'features/chart/chartData';

function App() {
	return (
		<Layout className="flex">
			<WeatherApp />
			{/* <WeatherChart /> */}
			<Toaster />
		</Layout>
	);
}

export default App;

import { Route, Routes } from 'react-router-dom';

import 'assets/styles/app.scss';

import Layout from 'hoc/layout';
import WeatherApp from 'features/weatherTemp/contianer/home';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<WeatherApp />} />
			</Routes>
		</Layout>
	);
}

export default App;

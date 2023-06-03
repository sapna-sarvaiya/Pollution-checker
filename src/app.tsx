import { Route, Routes } from 'react-router-dom';

import 'assets/styles/app.scss';

import Layout from 'hoc/layout';
import Senser from '../src/features/sensers/contianer/senser';
import SimpleMap from 'features/map/contianer/map';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Senser />} />
				<Route path='/location-map' element={<SimpleMap />} />
			</Routes>
		</Layout>
	);
}

export default App;

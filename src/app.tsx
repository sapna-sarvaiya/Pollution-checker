
import Layout from 'hoc/layout';
import WeatherApp from 'features/weatherTemp/contianer/home';
import { Toaster } from 'react-hot-toast';
import 'assets/styles/app.scss';

function App() {
	return (
		<Layout className="flex">
			<WeatherApp />
			<Toaster />
		</Layout>
	);
}

export default App;

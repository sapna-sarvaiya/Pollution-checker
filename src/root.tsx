import React from 'react';
import App from 'app';

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';

const Root: React.FC = (props) => {
	return (
		<BrowserRouter>
			<App {...props} />
		</BrowserRouter>
	);
};
reportWebVitals();

export default Root;

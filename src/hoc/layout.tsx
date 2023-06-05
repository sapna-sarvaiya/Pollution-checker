/* eslint-disable react/jsx-no-bind */
import React from 'react';

import logo from 'assets/images/logo.jpg';

import withRouter from './withRouter';
import Header from 'shared/components/header/header';
import WeatherApp from 'features/weatherTemp/contianer/home';
const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<>
				<div className='header-logo flex align-items--center justify-content--center cursor--pointer'>
				{/* <Header/> */}
				</div>
			{props.children}
		</>
	);
};

export default withRouter(Layout);

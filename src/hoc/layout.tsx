/* eslint-disable react/jsx-no-bind */
import React from 'react';

import withRouter from './withRouter';
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

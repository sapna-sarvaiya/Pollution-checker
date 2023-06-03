/* eslint-disable react/jsx-no-bind */
import React from 'react';

import edge360Logo from 'assets/images/edge-360-logo.png';

const Header: React.FC = () => {
	return (
		<div className='header z-index--100 position--fixed width--full flex justify-content--between align-items--center bg--grey-400'>
			<div className='header-logo flex ml--35 cursor--pointer'>
				<img className='logo height--full' src={edge360Logo} alt='/next-edge-logo' />
			</div>
		</div>
	);
};

export default Header;

import React from 'react';
import GoogleMapReact from 'google-map-react';

const SimpleMap = () => {
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627
		},
		zoom: 11
	};

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: '100vh', width: '100%' }} className='flex align-items--center justify-content--center'>
			<div className='map'>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				></GoogleMapReact>
			</div>
		</div>
	);
};
export default SimpleMap;

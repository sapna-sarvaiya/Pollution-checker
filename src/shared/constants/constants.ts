import { CSSProperties } from 'react';


// reactSelectStyles - css style object for react-select

const PaginationStyles = {
	// none of react-selects styles are passed to <View />
	container: (base: CSSProperties) => ({
		...base,
		fontSize: '14px',
		fontWeight: '600',
		minHeight: '32px',
		minWidth: '80px',
		display: 'flex'
	}),

	control: (base: CSSProperties) => ({
		...base,
		backgroundColor: '#464748',
		width: '100%',
		minHeight: '0',
		border: 'none',
		boxShadow: 'none'
	}),

	valueContainer: (base: CSSProperties) => ({
		...base,
		padding: '0 8px'
	}),

	singleValue: (base: CSSProperties) => ({
		...base,
		color: '#ffffff'
	}),

	indicatorSeparator: () => ({
		display: 'none'
	}),

	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),

	dropdownIndicator: (base: CSSProperties, state: any) => ({
		...base,
		padding: '0 8px',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
		color: state.selectProps.menuIsOpen && '#ffffff',
		':hover': {
			color: '#ffffff'
		}
	}),

	menu: (base: CSSProperties) => ({
		...base,
		backgroundColor: '#464748',
		margin: '5px 0'
	}),

	menuList: (base: CSSProperties) => ({
		...base,
		padding: '0'
	}),

	option: (base: CSSProperties, state: any) => ({
		...base,
		padding: '8px',
		margin: '3px',
		width: 'inherit',
		backgroundColor: state.isSelected ? '#ED6A29' : state.isFocused ? 'transparent' : '',
		borderRadius: '4px',
		':active': {
			backgroundColor: '#ED6A29'
		},
		':hover': {
			backgroundColor: '#ED6A29',
			opacity: state.isSelected ? '' : '0.8',
			transition: 'all 0.1s linear'
		}
	})
};

const multiReactSelectStyles = {
	// none of react-selects styles are passed to <View />
	container: (base: CSSProperties) => ({
		...base,
		height: '55px',
		fontWeight: '400',
		border: '1px solid #464748',
		backgroundColor: '#18191a',
		borderRadius: '100px',
		display: 'flex',
		cursor: 'pointer'
	}),

	placeholder: (base: CSSProperties) => ({
		...base,
		fontSize: '14px'
	}),

	control: (base: CSSProperties) => ({
		...base,
		width: '100%',
		backgroundColor: '#18191a',
		border: 'none',
		boxShadow: 'none',
		margin: '0 15px',
		padding: '5px 0',
		borderRadius: '100px',
		minHeight: 'auto',
		cursor: 'pointer'
	}),

	valueContainer: (base: CSSProperties) => ({
		...base,
		padding: '0 8px',
		height: '100%',
		overflowY: 'auto'
	}),

	input: (base: CSSProperties) => ({
		...base,
		color: '#ffffff',
		width: '5px'
	}),

	singleValue: (base: CSSProperties) => ({
		...base,
		color: '#ffffff'
	}),

	multiValue: (base: CSSProperties) => ({
		...base,
		color: '#ffffff',
		backgroundColor: '#ed6a29cc',
		fontWeight: '500'
	}),

	multiValueLabel: (base: CSSProperties) => ({
		...base,
		color: '#ffffff',
		letterSpacing: '1px'
	}),

	multiValueRemove: (base: CSSProperties) => ({
		...base,
		color: '#ffffff',
		':hover': {
			backgroundColor: '#ED6A29'
		}
	}),

	indicatorSeparator: () => ({
		display: 'none'
	}),

	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer',
		padding: '0',
		color: '#808080',
		':hover': {
			color: '#ffffff'
		}
	}),

	dropdownIndicator: (base: CSSProperties, state: any) => ({
		...base,
		padding: '0',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
		color: state.selectProps.menuIsOpen ? '#ffffff' : '#808080',
		':hover': {
			color: '#ffffff'
		},
		display: state.selectProps.isDisabled ? 'none' : 'flex'
	}),

	menu: (base: CSSProperties) => ({
		...base,
		backgroundColor: '#18191a',
		border: '1px solid #464748',
		margin: '5px 0',
		borderRadius: '10px',
		scrollBarWidth: 'none',
		zIndex: '3'
	}),

	menuList: (base: CSSProperties) => ({
		...base,
		padding: '0'
	}),

	option: (base: CSSProperties, state: any) => ({
		...base,
		padding: '8px',
		margin: '3px',
		width: 'inherit',
		backgroundColor: state.isSelected ? '#ED6A29' : state.isFocused ? 'transparent' : '',
		borderRadius: '4px',
		':active': {
			backgroundColor: '#ED6A29'
		},
		':hover': {
			backgroundColor: '#ED6A29CC',
			transition: 'all 0.1s linear'
		},
		scrollBarWidth: 'none'
	})
};

const PASSWORD_REGX =
	/^(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/;

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const SEASON_REGX = /^[\d-]{0,9}$/;

const SliderRangeValues = {
	height: {
		min: 60,
		max: 84
	},
	weight: {
		min: 150,
		max: 325
	},
	igaScore: {
		min: 0,
		max: 100
	},
	productionScore: {
		min: 0,
		max: 100
	},
	raScore: {
		min: 0,
		max: 100
	},
	gpaScore: {
		min: 0,
		max: 40
	},
	actScore: {
		min: 1,
		max: 36
	},
	satScore: {
		min: 400,
		max: 1600
	}
};


const Theme_Colors: { [key: string]: string } = {
	'#4C9B92': 'color-palate-1',
	'#29A3EF': 'color-palate-2',
	'#622876': 'color-palate-3',
	'#AB1E3E': 'color-palate-4',
	'#9747FF': 'color-palate-5',
	'#BF6196': 'color-palate-6',
	'#AF8C47': 'color-palate-7',
	'#1F9471': 'color-palate-8',
	'#D13838': 'color-palate-9',
	'#3076B1': 'color-palate-10',
	'#1CA051': 'color-palate-11',
	'#D7C52A': 'color-palate-12',
	'#CE3B4D': 'color-palate-13'
};

const Theme_Card: { [key: string]: string } = {
	'theme-1': 'theme-1',
	'theme-2': 'theme-2',
	'theme-3': 'theme-3'
};

const DEFAULT_PAGINATION = {
	page: 1,
	currentPage: 1,
	nextPage: 0,
	totalPages: 0,
	recordPerPage: 10,
	remainingCount: 0,
	total: 0,
	totalWithPinned: 0,
	myPlayerCounts: 0
};

const SUPPORTED_FILE_SIZE_AND_FORMAT: { [key: string]: { size: number; format: string[] } } = {
	video: {
		size: 100,
		format: ['video/x-ms-wmv', 'video/x-msvideo', 'video/webm', 'video/mp4', 'video/quicktime']
	},
	document: {
		size: 10,
		format: [
			'application/pdf',
			'application/docx',
			'application/docx',
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			'application/msword',
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
		]
	}
};

const S3_BUCKET = `${process.env.REACT_APP_S3_BUCKET}`;

const senserList = {
	"status": "success",
	"data": {
		"sensors": [
			{
				"id": 1,
				"location": "Bodakdev",
				"latitude": 23.0379,
				"longitude": 72.5101,
				"pm25": 20.5,
				"co": 2.8,
				"severity": "Moderate",
				"sensor_name": "Bodakdev Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-01-15",
				"temperature": 30.5,
				"description": "This sensor monitors air quality in Bodakdev area."
			},
			{
				"id": 2,
				"location": "Paldi",
				"latitude": 23.0131,
				"longitude": 72.5627,
				"pm25": 35.2,
				"co": 4.1,
				"severity": "Unhealthy",
				"sensor_name": "Paldi Sensor",
				"sensor_type": "Pollution Monitor",
				"installation_date": "2023-02-03",
				"temperature": 32.1,
				"description": "This sensor measures various pollutants in Paldi area."
			},
			{
				"id": 3,
				"location": "Maninagar",
				"latitude": 22.9981,
				"longitude": 72.6025,
				"pm25": 17.8,
				"co": 1.9,
				"severity": "Good",
				"sensor_name": "Maninagar Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-04-12",
				"temperature": 29.2,
				"description": "This sensor monitors air quality in Maninagar area."
			},
			{
				"id": 4,
				"location": "Sabarmati",
				"latitude": 23.09,
				"longitude": 72.5895,
				"pm25": 23.6,
				"co": 3.2,
				"severity": "Moderate",
				"sensor_name": "Sabarmati Sensor",
				"sensor_type": "Pollution Monitor",
				"installation_date": "2023-03-20",
				"temperature": 31.8,
				"description": "This sensor measures various pollutants in Sabarmati area."
			},
			{
				"id": 5,
				"location": "Vastrapur",
				"latitude": 23.0405,
				"longitude": 72.5158,
				"pm25": 19.1,
				"co": 2.3,
				"severity": "Good",
				"sensor_name": "Vastrapur Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-02-28",
				"temperature": 31.5,
				"description": "This sensor monitors air quality in Vastrapur area."
			},
			{
				"id": 6,
				"location": "Gandhinagar",
				"latitude": 23.2156,
				"longitude": 72.6369,
				"pm25": 24.3,
				"co": 3.4,
				"severity": "Moderate",
				"sensor_name": "Gandhinagar Sensor",
				"sensor_type": "Pollution Monitor",
				"installation_date": "2023-01-20",
				"temperature": 29.8,
				"description": "This sensor measures various pollutants in Gandhinagar area."
			},
			{
				"id": 7,
				"location": "Satellite",
				"latitude": 23.0247,
				"longitude": 72.5169,
				"pm25": 18.6,
				"co": 2.6,
				"severity": "Good",
				"sensor_name": "Satellite Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-03-10",
				"temperature": 31.2,
				"description": "This sensor monitors air quality in Satellite area."
			},
			{
				"id": 8,
				"location": "Memnagar",
				"latitude": 23.0479,
				"longitude": 72.5296,
				"pm25": 16.9,
				"co": 1.7,
				"severity": "Good",
				"sensor_name": "Memnagar Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-02-15",
				"temperature": 30.1,
				"description": "This sensor monitors air quality in Memnagar area."
			},
			{
				"id": 9,
				"location": "Navrangpura",
				"latitude": 23.037,
				"longitude": 72.5608,
				"pm25": 21.4,
				"co": 2.9,
				"severity": "Moderate",
				"sensor_name": "Navrangpura Sensor",
				"sensor_type": "Pollution Monitor",
				"installation_date": "2023-01-25",
				"temperature": 31.9,
				"description": "This sensor measures various pollutants in Navrangpura area."
			},
			{
				"id": 10,
				"location": "Thaltej",
				"latitude": 23.0494,
				"longitude": 72.5048,
				"pm25": 22.8,
				"co": 3.1,
				"severity": "Moderate",
				"sensor_name": "Thaltej Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-04-05",
				"temperature": 29.5,
				"description": "This sensor monitors air quality in Thaltej area."
			},
			{
				"id": 11,
				"location": "Chandkheda",
				"latitude": 23.1056,
				"longitude": 72.5755,
				"pm25": 26.7,
				"co": 3.8,
				"severity": "Unhealthy",
				"sensor_name": "Chandkheda Sensor",
				"sensor_type": "Pollution Monitor",
				"installation_date": "2023-03-02",
				"temperature": 31.3,
				"description": "This sensor measures various pollutants in Chandkheda area."
			},
			{
				"id": 12,
				"location": "Vejalpur",
				"latitude": 22.9824,
				"longitude": 72.4934,
				"pm25": 18.2,
				"co": 2.5,
				"severity": "Good",
				"sensor_name": "Vejalpur Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-02-18",
				"temperature": 30.7,
				"description": "This sensor monitors air quality in Vejalpur area."
			},
			{
				"id": 13,
				"location": "Naranpura",
				"latitude": 23.0524,
				"longitude": 72.5484,
				"pm25": 20.9,
				"co": 2.7,
				"severity": "Moderate",
				"sensor_name": "Naranpura Sensor",
				"sensor_type": "Pollution Monitor",
				"installation_date": "2023-01-30",
				"temperature": 29.4,
				"description": "This sensor measures various pollutants in Naranpura area."
			},
			{
				"id": 14,
				"location": "Ghatlodiya",
				"latitude": 23.0756,
				"longitude": 72.5485,
				"pm25": 21.8,
				"co": 2.9,
				"severity": "Moderate",
				"sensor_name": "Ghatlodiya Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-04-10",
				"temperature": 31.6,
				"description": "This sensor monitors air quality in Ghatlodiya area."
			},
			{
				"id": 15,
				"location": "Drive-In",
				"latitude": 23.0539,
				"longitude": 72.5302,
				"pm25": 17.3,
				"co": 2.2,
				"severity": "Good",
				"sensor_name": "Drive-In Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-03-08",
				"temperature": 29.9,
				"description": "This sensor monitors air quality in Drive-In area."
			},
			{
				"id": 16,
				"location": "Gurukul",
				"latitude": 23.0397,
				"longitude": 72.5609,
				"pm25": 19.6,
				"co": 2.5,
				"severity": "Good",
				"sensor_name": "Gurukul Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-02-20",
				"temperature": 30.3,
				"description": "This sensor monitors air quality in Gurukul area."
			},
			{
				"id": 17,
				"location": "Bopal",
				"latitude": 23.0166,
				"longitude": 72.4667,
				"pm25": 24.1,
				"co": 3.3,
				"severity": "Moderate",
				"sensor_name": "Bopal Sensor",
				"sensor_type": "Pollution Monitor",
				"installation_date": "2023-01-27",
				"temperature": 31.1,
				"description": "This sensor measures various pollutants in Bopal area."
			},
			{
				"id": 18,
				"location": "Ambawadi",
				"latitude": 23.0227,
				"longitude": 72.5576,
				"pm25": 18.9,
				"co": 2.4,
				"severity": "Good",
				"sensor_name": "Ambawadi Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-04-08",
				"temperature": 30.4,
				"description": "This sensor monitors air quality in Ambawadi area."
			},
			{
				"id": 19,
				"location": "Shahibaug",
				"latitude": 23.0576,
				"longitude": 72.5905,
				"pm25": 20.3,
				"co": 2.6,
				"severity": "Moderate",
				"sensor_name": "Shahibaug Sensor",
				"sensor_type": "Pollution Monitor",
				"installation_date": "2023-02-10",
				"temperature": 29.7,
				"description": "This sensor measures various pollutants in Shahibaug area."
			},
			{
				"id": 20,
				"location": "Nikol",
				"latitude": 23.0365,
				"longitude": 72.6412,
				"pm25": 26.5,
				"co": 3.7,
				"severity": "Unhealthy",
				"sensor_name": "Nikol Sensor",
				"sensor_type": "Air Quality Sensor",
				"installation_date": "2023-03-05",
				"temperature": 31.7,
				"description": "This sensor monitors air quality in Nikol area."
			}
		]
	}
}


export {
	PaginationStyles,
	multiReactSelectStyles,
	PASSWORD_REGX,
	SliderRangeValues,
	isSafari,
	Theme_Colors,
	DEFAULT_PAGINATION,
	SUPPORTED_FILE_SIZE_AND_FORMAT,
	S3_BUCKET,
	Theme_Card,
	SEASON_REGX,
	senserList
};

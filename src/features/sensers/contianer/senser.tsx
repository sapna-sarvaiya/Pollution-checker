import { useEffect, useMemo, useState } from 'react';
import { senserList } from 'shared/constants/constants';
import { IData, IDropDownOption } from '../interface/senser.interface';
import SenserList from '../component/senserList';
import { ReactSelect } from 'shared/components/dropDown/reactSelect';
import { selectedOption } from 'shared/util/utility';

const Senser: React.FC = () => {
	const [senserData, setSenserData] = useState<IData[]>({} as IData[]);
	const [filterValue, setFilterValue] = useState('');
	const [filters, setFilter] = useState<IDropDownOption[]>([]);

	const list = useMemo(() => senserList.data.sensors || [], []);

	useEffect(() => {
		if (list) {
			setSenserData(list);

			let filterData: IDropDownOption[] = [];
			list.map((data: IData) => {
				filterData.push({
					label: data.location,
					value: data.location
				});

				return filterData;
			});
			setFilter([...filterData]);
		}
	}, [list]);

	const handleUpdateFilter = (key: string, value: string) => {
		setFilterValue(value);
		if (value) {
			const updateData = senserData.filter((data) => {
				return data.location === value;
			});
			setSenserData([...updateData]);
		} else {
			setSenserData(list);
		}
	};

	return (
		<div className='pag-wrapper'>
			<div className='flex align-items--center justify-content--between'>
				<div className='text--white font-size--24 mb--20'>Sensors Data with their location</div>
				<div className='filter-wrapper width--50 flex justify-content--end mb--20'>
					<ReactSelect
						name='location'
						options={filters}
						placeholder='Select location'
						selectedValue={selectedOption(filters, filterValue)}
						onChange={(positionOption: any) => {
							handleUpdateFilter('location', positionOption.value);
						}}
						className='form_field'
					/>
				</div>
			</div>

			<SenserList senserData={senserData} />
		</div>
	);
};
export default Senser;

export const sensorListColumns = [
	{
		key: 'location',
		sortable: false,
		heading: 'Location',
		className: 'width--15'
	},
	{
		key: 'sensor_type',
		sortable: false,
		heading: 'Sensor Type',
		className: 'width--10'
	},
	{
		key: 'sensor_name',
		sortable: false,
		heading: 'Sensor Name',
		className: 'width--10'
	},
	{
		key: 'pm25',
		sortable: false,
		heading: 'pm25',
		className: 'width--10'
	},
	{
		key: 'co',
		sortable: false,
		heading: 'Co',
		className: 'width--10'
	},
	{
		key: 'severity',
		sortable: false,
		heading: 'Severity',
		className: 'width--10'
	},
	{
		key: 'installation_date',
		sortable: false,
		heading: 'Installation Date',
		className: 'width--10'
	}
];

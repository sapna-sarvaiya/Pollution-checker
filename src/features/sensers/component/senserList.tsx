import { isEmpty } from 'lodash';
import { Fragment } from 'react';
import { CTable, CTableBody, CTableCell, CTableHead, CTableHeader, CTableRow } from 'shared/components/table';
import { IData } from '../interface/senser.interface';
import { sensorListColumns } from '../contianer/senser';
import { useNavigate } from 'react-router-dom';

interface IProps {
	senserData: IData[];
}

const SenserList: React.FC<IProps> = (props) => {
	const { senserData } = props;
	const navigate = useNavigate();

	const addClassName = (value: string) => {
		if (value === 'Moderate') {
			return 'text--success';
		} else if (value === 'Good') {
			return 'text--green';
		} else {
			return 'text--red';
		}
	};

	return (
		<>
			<CTable className='mt--10'>
				<CTableHead className=''>
					<CTableRow>
						{sensorListColumns.map((column) => (
							<CTableHeader
								key={column.key}
								sortable={column.sortable}
								columnKey={column.key || ''}
								className={column.className}
								heading={column.heading}
							/>
						))}
					</CTableRow>
				</CTableHead>
				<CTableBody>
					{!isEmpty(senserData) &&
						senserData.map((data: IData) => {
							return (
								<Fragment key={data.id}>
									<CTableRow>
										<CTableCell>
											<p
												className='table-cell-info cursor--pointer'
												onClick={() => navigate('/location-map')}
											>
												{data.location}
											</p>
										</CTableCell>
										<CTableCell>
											<p className='table-cell-info'>{data.sensor_type}</p>
										</CTableCell>
										<CTableCell>
											<p className='table-cell-info cursor--pointer' title={data.description}>
												{data.sensor_name}
											</p>
										</CTableCell>
										<CTableCell>
											<p className='table-cell-info'>{data.pm25}</p>
										</CTableCell>
										<CTableCell>
											<p className='table-cell-info'>{data.co}</p>
										</CTableCell>
										<CTableCell>
											<p className={`table-cell-info ${addClassName(data.severity)}`}>
												{data.severity}
											</p>
										</CTableCell>
										<CTableCell>
											<p className='table-cell-info'>{data.installation_date}</p>
										</CTableCell>
									</CTableRow>
								</Fragment>
							);
						})}
				</CTableBody>
			</CTable>
		</>
	);
};
export default SenserList;

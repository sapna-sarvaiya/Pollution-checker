import React from 'react';

import CTableRow from './CTableRow';
import CTableCell from './CTableCell';

interface IProps {
	colSpan: number;
}

const CTableSpinner: React.FC<IProps> = (props) => (
	<CTableRow>
		<CTableCell colSpan={props.colSpan}></CTableCell>
	</CTableRow>
);

export default CTableSpinner;

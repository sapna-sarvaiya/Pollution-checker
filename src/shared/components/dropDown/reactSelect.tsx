import Select, { StylesConfig } from 'react-select';
import { multiReactSelectStyles } from 'shared/constants/constants';
import { IDropDownOptions } from 'shared/interface';

interface ISelectDropDownProps {
	title?: string;
	options?: IDropDownOptions[] | IDropDownOptions[][];
	placeholder: string;
	name: string;
	className?: string;
	onChange?: (value: any) => void;
	selectedValue?: IDropDownOptions | IDropDownOptions[] | IDropDownOptions[][];
	isMulti?: boolean;
	selectContainer?: string;
	onFocus?: () => void;
	isDisabled?: boolean;
	isSearchable?: boolean;
	isErrorShow?: boolean;
	isClearable?: boolean;
}

export const ReactSelect: React.FC<ISelectDropDownProps> = (props) => {
	const {
		options,
		placeholder,
		title,
		name,
		className,
		onChange,
		selectedValue,
		isMulti = false,
		selectContainer,
		onFocus,
		isDisabled = false,
		isSearchable,
		isErrorShow = false,
		isClearable = true
	} = props;

	return (
		<div className={['select-field_wrapper', className].join(' ')}>
			{!!title && (
				<div className='flex'>
					<p className={`select-title ${isErrorShow ? 'required-title' : ''} text--grey-100 pb--5`}>
						{title}
					</p>
				</div>
			)}
			<Select
				styles={multiReactSelectStyles as StylesConfig}
				value={selectedValue}
				name={name}
				className={['select-field', selectContainer].join(' ')}
				options={options}
				placeholder={placeholder}
				onChange={(value) => onChange && onChange(value ? value : '')}
				isMulti={isMulti}
				classNamePrefix='select'
				onFocus={onFocus}
				key={((selectedValue || []) as IDropDownOptions[]).length}
				isDisabled={isDisabled}
				isSearchable={isSearchable}
				isClearable={isClearable && !!selectedValue}
			/>
		</div>
	);
};

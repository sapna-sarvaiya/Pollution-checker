
import { isSafari } from 'shared/constants/constants';
import { IDropDownOptions } from 'shared/interface';



export const debounce = (func: any, wait = 500) => {
	let h: NodeJS.Timeout;
	return (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => func(...args), wait);
	};
};

let scrollPosition = 0;

const body = document.getElementsByTagName('body')[0];
export const handleAddOverflow = (oldScrollValue = 0) => {
	const webAppContentWrapper = document.getElementsByClassName('wrapper')[0] as HTMLDivElement;

	if (body) {
		if (isSafari) {
			if (oldScrollValue) {
				window.scrollTo({ top: oldScrollValue });
			}
			scrollPosition = window.pageYOffset;
			document.body.style.top = `-${oldScrollValue || scrollPosition}px`;
			body.classList.add('lock-position');
			if (webAppContentWrapper) {
				const topPosition = oldScrollValue || scrollPosition;
				webAppContentWrapper.style.top = topPosition > 0 ? `-${topPosition - 88}px` : '88px';
				webAppContentWrapper.classList.add('lock-position');
			}
		} else {
			body.classList.add('overflow--hidden');
			webAppContentWrapper && webAppContentWrapper.classList.add('overflow--hidden');
		}
	}
};

export const handleRemoveOverflow = () => {
	const webAppContentWrapper = document.getElementsByClassName('wrapper')[0] as HTMLDivElement;
	if (body) {
		if (isSafari) {
			body.classList.remove('lock-position');
			document.body.style.removeProperty('top');
			if (webAppContentWrapper) {
				webAppContentWrapper.style.removeProperty('top');
				webAppContentWrapper.classList.remove('lock-position');
				webAppContentWrapper.scrollTo({ top: scrollPosition });
			}
			window.scrollTo({ top: scrollPosition });
		} else {
			body.classList.remove('overflow--hidden');
			webAppContentWrapper && webAppContentWrapper.classList.remove('overflow--hidden');
		}
	}
};

export const selectedOption = (options: IDropDownOptions[], value: string | number | string[]) => {
	if (Array.isArray(value)) {
		return options.filter((option) => value.includes(option.value as string));
	}
	return options.filter((option) => option.value === value);
};

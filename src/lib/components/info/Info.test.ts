import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Info from './Info.svelte';

const baseProps = { title: 'awesome title', subtitle: 'awesome subtitle' };

describe('<Info />', () => {
	describe('when a title is set', () => {
		it('should have the specified title', () => {
			const { getByTestId } = render(Info, baseProps);
			const title = getByTestId('info_title');
			expect(title.innerHTML).toBe(baseProps.title);
		});
	});

	describe('when a subtitle is set', () => {
		it('should have the specified subtitle', () => {
			const { getByTestId } = render(Info, baseProps);
			const subtitle = getByTestId('info_subtitle');
			expect(subtitle.innerHTML).toBe(baseProps.subtitle);
		});
	});

	describe('when hide is set as true', () => {
		const props = { ...baseProps, hide: true };
		it('should not be displayed', () => {
			const { queryByTestId } = render(Info, props);
			const container = queryByTestId('info_container');
			expect(container).toBe(null);
		});
	});
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Fa from './Fa.svelte';

const baseProps = {
	icon: ['fas', '500px'],
	iconSize: 'lg',
	iconColor: 'text-red-500',
	class: 'awesome-class'
};

describe('<Fa />', () => {
	describe('when icon is set', () => {
		it('should contain the specified fontawesome icon', () => {
			const { getByTestId } = render(Fa, baseProps);
			const icon = getByTestId('fa_icon');
			expect(icon.classList.contains(baseProps.icon[0])).toBe(true);
			expect(icon.classList.contains(`fa-${baseProps.icon[1]}`)).toBe(true);
		});
	});

	describe('when a size is set', () => {
		it('should contain the specified size', () => {
			const { getByTestId } = render(Fa, baseProps);
			const icon = getByTestId('fa_icon');
			expect(icon.classList.contains(`fa-${baseProps.iconSize}`)).toBe(true);
		});
	});

	describe('when an icon color is set', () => {
		it('should be displayed with the specified color', () => {
			const { getByTestId } = render(Fa, baseProps);
			const icon = getByTestId('fa_icon');
			expect(icon.classList.contains(baseProps.iconColor)).toBe(true);
		});
	});

	describe('when a class is set', () => {
		it('should contain the specified class', () => {
			const { getByTestId } = render(Fa, baseProps);
			const icon = getByTestId('fa_icon');
			expect(icon.classList.contains(baseProps.class)).toBe(true);
		});
	});
});

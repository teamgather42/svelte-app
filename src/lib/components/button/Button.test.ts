import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Button from './Button.svelte';

const baseProps = {
	backgroundColor: 'bg-red-500',
	textColor: 'text-red-500',
	rounded: 'rounded-full',
	icon: ['fas', '500px'],
	iconSize: '2x',
	position: 'left'
};
const eventHandler = jest.fn();

describe('<Button />', () => {
	describe('when a background color is set', () => {
		it('should have the specified background color', () => {
			const { getByTestId } = render(Button, baseProps);
			const button = getByTestId('button_button');
			expect(button.classList.contains(baseProps.backgroundColor)).toBe(true);
		});
	});

	describe('when a text color is set', () => {
		it('should have the specified text color', () => {
			const { getByTestId } = render(Button, baseProps);
			const button = getByTestId('button_button');
			expect(button.classList.contains(baseProps.textColor)).toBe(true);
		});
	});

	describe('when rounded is set', () => {
		it('should contain the specified rounded class', () => {
			const { getByTestId } = render(Button, baseProps);
			const button = getByTestId('button_button');
			expect(button.classList.contains(baseProps.rounded)).toBe(true);
		});
	});

	describe('when an icon and a position is set', () => {
		it('should contain an icon at the specified position', () => {
			const { getByTestId } = render(Button, baseProps);
			const icon = getByTestId('fa_icon');
			expect(icon).toBeInTheDocument();
		});
	});

	describe('when an icon size is set', () => {
		it('should contain the icon size', () => {
			const { getByTestId } = render(Button, baseProps);
			const icon = getByTestId('fa_icon');
			expect(icon.classList.contains(`fa-${baseProps.iconSize}`)).toBe(true);
		});
	});

	describe('event handlers', () => {
		it('should dispatch on:click event', () => {
			const { getByTestId, component } = render(Button, baseProps);
			const button = getByTestId('button_button');
			component.$on('click', eventHandler);
			button.click();
			expect(eventHandler).toBeCalled();
		});
	});
});

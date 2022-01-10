import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Link from './Link.svelte';

const baseProps = { to: 'https://google.fr', class: 'awesome-class' };
const eventHandler = jest.fn();

describe('<Link />', () => {
	describe('when to is set', () => {
		it('should redirect to the specified url', () => {
			const { getByTestId } = render(Link, baseProps);
			const link = getByTestId('link');
			expect(link.getAttribute('href')).toBe(baseProps.to);
		});
	});

	describe('when a class is set', () => {
		it('should contain the specified class', () => {
			const { getByTestId } = render(Link, baseProps);
			const link = getByTestId('link');
			expect(link.classList.contains(baseProps.class)).toBe(true);
		});
	});

	describe('event handlers', () => {
		it('should dispatch on:click event', () => {
			const { getByTestId, component } = render(Link, baseProps);
			const link = getByTestId('link');
			component.$on('click', eventHandler);
			link.click();
			expect(eventHandler).toBeCalled();
		});
	});
});

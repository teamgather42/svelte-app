import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Logo from './Logo.svelte';

const baseProps = { isLink: true, class: 'awesome-class' };

describe('<Logo />', () => {
	describe('when is link is set as true', () => {
		it('should be a link', () => {
			const { getByTestId } = render(Logo, baseProps);
			const link = getByTestId('logo_link');
			expect(link.tagName).toBe('A');
		});

		it('should redirect to /', () => {
			const { getByTestId } = render(Logo, baseProps);
			const link = getByTestId('logo_link');
			expect(link.getAttribute('href')).toBe('/');
		});
	});

	describe('when a class is set', () => {
		it('should contain the specified class', () => {
			const { getByTestId } = render(Logo, baseProps);
			const logo = getByTestId('logo_base');
			expect(logo.classList.contains(baseProps.class)).toBe(true);
		});
	});
});

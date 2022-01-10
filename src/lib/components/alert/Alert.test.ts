import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Alert from './Alert.svelte';

const baseProps = { hide: false };

describe('<Alert />', () => {
	describe('when variant is set as danger', () => {
		const props = { ...baseProps, variant: 'danger' };
		it('should contain a class as red', () => {
			const { getByTestId } = render(Alert, props);
			const alert = getByTestId('alert_container');
			expect(alert.classList.value.includes('red')).toBe(true);
		});
	});

	describe('when variant is set as success', () => {
		const props = { ...baseProps, variant: 'success' };
		it('should contain a class as green', () => {
			const { getByTestId } = render(Alert, props);
			const alert = getByTestId('alert_container');
			expect(alert.classList.value.includes('green')).toBe(true);
		});
	});

	describe('when hide is set as true', () => {
		const props = { hide: true };
		it('should not be displayed', () => {
			const { queryByTestId } = render(Alert, props);
			const alert = queryByTestId('alert_container');
			expect(alert).toBe(null);
		});
	});
});

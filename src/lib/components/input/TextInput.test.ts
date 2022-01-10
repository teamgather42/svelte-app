import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import TextInput from './TextInput.svelte';

const baseProps = {
	type: 'search',
	placeholder: 'awesome placeholder',
	label: 'awesome label',
	id: 'awesome-id',
	helperText: 'awesome helper text'
};

describe('<TextInput />', () => {
	describe('when a type is set', () => {
		it('should have the specified type', () => {
			const { getByTestId } = render(TextInput, baseProps);
			const input = getByTestId('text-input_input');
			expect(input.getAttribute('type')).toBe(baseProps.type);
		});
	});

	describe('when a placeholder is set', () => {
		it('should have the specified placeholder', () => {
			const { getByTestId } = render(TextInput, baseProps);
			const input = getByTestId('text-input_input');
			expect(input.getAttribute('placeholder')).toBe(baseProps.placeholder);
		});
	});

	describe('when an id is set', () => {
		it('should contain the specified id in input element', () => {
			const { getByTestId } = render(TextInput, baseProps);
			const input = getByTestId('text-input_input');
			expect(input.getAttribute('id')).toBe(baseProps.id);
		});

		it('should contain the specified id in label element', () => {
			const { getByTestId } = render(TextInput, baseProps);
			const label = getByTestId('text-input_label');
			expect(label.getAttribute('for')).toBe(baseProps.id);
		});
	});

	describe('when helperText is set', () => {
		it('should have a message', () => {
			const { getByTestId } = render(TextInput, baseProps);
			const helperText = getByTestId('text-input_helper-text');
			expect(helperText.innerHTML).toBe(baseProps.helperText);
		});
	});

	describe('when an error is set', () => {
		const props = { ...baseProps, error: true };
		it('should have a message which is display in red', () => {
			const { getByTestId } = render(TextInput, props);
			const helperText = getByTestId('text-input_helper-text');
			expect(helperText.classList.value.includes('red')).toBe(true);
		});

		it('should have red borders', () => {
			const { getByTestId } = render(TextInput, props);
			const input = getByTestId('text-input_input');
			expect(input.classList.value.includes('border-red')).toBe(true);
		});
	});

	describe('when valid is set', () => {
		const props = { ...baseProps, valid: true };
		it('should have a message which is display in green', () => {
			const { getByTestId } = render(TextInput, props);
			const helperText = getByTestId('text-input_helper-text');
			expect(helperText.classList.value.includes('green')).toBe(true);
		});

		it('should have green borders', () => {
			const { getByTestId } = render(TextInput, props);
			const input = getByTestId('text-input_input');
			expect(input.classList.value.includes('border-green')).toBe(true);
		});
	});
});

<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils/classnames';

	type Type = 'text' | 'email' | 'password' | 'search';

	/**
	 * Input type.
	 */
	export let type: Type = 'text';
	/**
	 * Input value.
	 */
	export let value: string = '';
	/**
	 * Input's placeholder.
	 */
	export let placeholder: string = null;
	/**
	 * Input's label.
	 */
	export let label: string = null;
	/**
	 * Input's id.
	 */
	export let id: string = null;
	/**
	 * Helper text under the input.
	 */
	export let helperText: string = '';
	/**
	 * Allow to show error message.
	 */
	export let error: boolean = false;
	/**
	 * Allow to show valid message.
	 */
	export let valid: boolean = false;

	let element;

	onMount(() => (element.type = type));

	$: componentClass = cn(
		!error && !valid && 'border-gray-300 focus:ring-blue-500',
		error && 'border-red-500 focus:ring-red-500',
		valid && 'border-green-500 focus:ring-green-500',
		'appearance-none',
		'focus:ring-1',
		'outline-none',
		'rounded',
		'border',
		'px-3',
		'py-3'
	);
</script>

<section class="flex flex-col w-fit">
	{#if label}
		<label data-testid="text-input_label" class="text-sm font-bold" for={id}>{label}</label>
	{/if}
	<input
		data-testid="text-input_input"
		bind:value
		on:input
		bind:this={element}
		{placeholder}
		{id}
		class={componentClass}
	/>
	{#if helperText}
		<span
			data-testid="text-input_helper-text"
			class:text-red-500={error}
			class:text-green-500={valid}
			class="text-sm italic">{helperText}</span
		>
	{/if}
</section>

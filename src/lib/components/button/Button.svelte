<script lang="ts">
	import { cn } from '$lib/utils/classnames';
	import { Fa, Loader } from '$lib/components';
	import type {
		Rounded,
		IconSize,
		BackgroundColor,
		TextColor,
		IconPrefix,
		IconName
	} from '$lib/types/index';

	type Position = 'left' | 'right' | 'center';

	/**
	 * Background color for the button.
	 */
	export let backgroundColor: BackgroundColor = 'bg-gray-600';
	/**
	 * Text color for the button.
	 */
	export let textColor: TextColor = 'text-white';
	/**
	 * Rounded corners for the button.
	 */
	export let rounded: Rounded = 'rounded';
	/**
	 * Show an icon at the left of the input.
	 */
	export let icon: [IconPrefix, IconName] = undefined;
	/**
	 * The position of the icon.
	 */
	export let position: Position = null;
	/**
	 * Change the icon size.
	 */
	export let iconSize: IconSize = 'lg';
	/**
	 * Change the icon color.
	 */
	export let iconColor: TextColor = 'text-black';
	/**
	 * Disbale the input if true.
	 */
	export let disabled: boolean = null;
	/**
	 * Show a spinner.
	 */
	export let loading: boolean = false;

	let classList = '';
	export { classList as class };

	$: componentClass = cn(
		icon && 'flex items-center',
		classList && classList,
		backgroundColor,
		textColor,
		rounded,
		'font-semibold',
		'text-base',
		'py-2',
		'px-4',
		'disabled:bg-gray-400',
		'flex',
		'justify-center',
		'items-center'
	);
</script>

<button data-testid="button_button" on:click|preventDefault class={componentClass} {disabled}>
	{#if loading}
		<Loader space />
	{/if}
	{#if icon && position === 'left'}
		<Fa {iconColor} class="mr-2" {iconSize} {icon} />
	{/if}
	{#if position === 'center'}
		<Fa {iconColor} {iconSize} {icon} />
	{:else}
		<slot />
	{/if}
	{#if icon && position === 'right'}
		<Fa {iconColor} class="ml-2" {iconSize} {icon} />
	{/if}
</button>

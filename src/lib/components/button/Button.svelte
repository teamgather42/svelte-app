<script lang="ts">
	import { cn } from '$lib/utils/classnames';
	import Fa from '$lib/components/fontawesome/Fa.svelte';
	import type {
		Rounded,
		IconSize,
		BackgroundColor,
		TextColor,
		IconPrefix,
		IconName
	} from '$lib/types/index';

	type Position = 'left' | 'right';

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

	$: componentClass = cn(
		icon && 'flex items-center',
		backgroundColor,
		textColor,
		rounded,
		'font-semibold',
		'text-base',
		'py-2',
		'px-4'
	);
</script>

<button data-testid="button_button" on:click class={componentClass}>
	{#if icon && position === 'left'}
		<Fa class="mr-2" {iconSize} {icon} />
	{/if}
	<slot />
	{#if icon && position === 'right'}
		<Fa class="ml-2" {iconSize} {icon} />
	{/if}
</button>

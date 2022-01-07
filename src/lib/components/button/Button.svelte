<script lang="ts">
	import { cn } from '$lib/utils/classnames';
	import Fa from 'svelte-fa/src/fa.svelte';
	import type { Rounded, IconSize, Color } from '$lib/types/index';
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

	type Position = 'left' | 'right';

	/**
	 * Background color for the button.
	 */
	export let backgroundColor: Color = 'gray-600';
	/**
	 * Text color for the button.
	 */
	export let textColor: Color = 'white';
	/**
	 * Rounded corners for the button.
	 */
	export let rounded: Rounded = 'rounded';
	/**
	 * Show an icon at the left of the input.
	 */
	export let icon: IconDefinition = null;
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
		`bg-${backgroundColor}`,
		`text-${textColor}`,
		rounded,
		'font-semibold',
		'text-base',
		'py-2',
		'px-4'
	);
</script>

<button on:click class={componentClass}>
	{#if icon && position === 'left'}
		<Fa class="mr-2" {icon} size={iconSize} />
	{/if}
	<slot />
	{#if icon && position === 'right'}
		<Fa class="ml-2" {icon} size={iconSize} />
	{/if}
</button>

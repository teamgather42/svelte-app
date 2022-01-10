<script lang="ts">
	import type { IconName, IconPrefix, IconSize, TextColor, Position } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import Fa from '$lib/components/fontawesome/Fa.svelte';
	import { cn } from '$lib/utils/classnames';

	const dispatch = createEventDispatcher();

	/**
	 * Aria label for the button.
	 */
	export let ariaLabel: string = '';
	/**
	 * The font awesome icon.
	 */
	export let icon: [IconPrefix, IconName] = null;
	/**
	 * Additional class for the icon.
	 */
	export let iconClass: string = '';
	/**
	 * Position of the icon.
	 */
	export let iconPosition: Position = 'left';
	/**
	 * Size of the icon.
	 */
	export let iconSize: IconSize = 'lg';
	/**
	 * Color of the icon.
	 */
	export let iconColor: TextColor = 'text-gray-600';

	$: componentClass = cn(iconClass && iconClass, iconColor && iconColor, 'mr-2');

	const clickHandler = () => dispatch('clickHandler', { hide: false });
</script>

<button
	class="hover:bg-gray-100 rounded-full py-2 px-4 text-gray-600 hover:text-black w-max flex items-center"
	on:click={clickHandler}
	aria-label={ariaLabel}
>
	{#if icon && iconPosition === 'left'}
		<Fa {icon} class={componentClass} {iconSize} />
	{/if}
	<slot />
	{#if icon && iconPosition === 'right'}
		<Fa {icon} class={componentClass} {iconSize} />
	{/if}
</button>

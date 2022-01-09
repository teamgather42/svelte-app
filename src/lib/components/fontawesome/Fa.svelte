<script lang="ts">
	import type { IconPrefix, IconName, IconSize, Color, TextColor } from '$lib/types';
	import { cn } from '$lib/utils/classnames';

	/**
	 * Base font awesome prefix.
	 */
	const basePrefix: string = 'fa';

	/**
	 * Fontawesome icon array with prefix and icon name.
	 */
	export let icon: [IconPrefix, IconName];
	/**
	 * Size of the icon.
	 */
	export let iconSize: IconSize = '2x';
	/**
	 * Color of the icon.
	 */
	export let iconColor: TextColor = 'text-black';
	/**
	 * Additional class to the icon.
	 */
	let className: string = '';
	export { className as class };

	$: componentClass = cn(
		`${icon[0]}`,
		`${basePrefix}-${icon[1]}`,
		`${basePrefix}-${iconSize}`,
		className && className,
		iconColor
	);
</script>

<i class={componentClass} />

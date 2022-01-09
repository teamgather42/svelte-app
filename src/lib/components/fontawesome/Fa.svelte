<script lang="ts">
	import type { IconPrefix, IconName, IconSize } from '$lib/types';
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

	$: componentClass = cn(`${icon[0]}`, `${basePrefix}-${icon[1]}`, `${basePrefix}-${iconSize}`);
</script>

<i class={componentClass} />

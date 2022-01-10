<script lang="ts">
	import { cn } from '$lib/utils/classnames';
	import { getBaseUrl } from '$lib/utils/env.variables';

	type DisplayAs = 'button' | 'link';
	/**
	 * Redirection URL.
	 */
	export let to: string = getBaseUrl as string;
	/**
	 * Display the link as a button or basic link.
	 */
	export let displayAs: DisplayAs = 'link';
	/**
	 * Component class
	 */
	let className: string = ' ';
	export { className as class };
	/**
	 * Default link style (temp)
	 */
	const linkStyle: string = 'font-semibold text-blue-700 underline';
	/**
	 * Default buton style (temp)
	 */
	const buttonStyle: string =
		'font-semibold text-base py-2 px-4 rounded border border-gray-700 text-gray-600';

	$: componentClass = cn(
		displayAs === 'link' && linkStyle,
		displayAs === 'button' && buttonStyle,
		className
	);
</script>

<a on:click class={componentClass} href={to}><slot /></a>

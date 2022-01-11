<script lang="ts">
	import type { Option } from '../nav.links';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/**
	 * Text that is displayed as heading.
	 */
	export let heading: string = '';
	/**
	 * List options.
	 */
	export let options: Option[] = null;

	const linkHandler = () => dispatch('linkHandler');
</script>

<section>
	{#if heading}
		<h2 class="border-b text-xl">{heading}</h2>
	{/if}
	<ul>
		{#each options as { label, href }}
			<li class="my-1 hover:bg-gray-200">
				<a on:click={linkHandler} class="block py-1 pl-2" {href}>{label}</a>
			</li>
		{/each}
	</ul>
</section>

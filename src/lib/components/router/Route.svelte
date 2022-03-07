<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let currentRoute: string;

	export let route: string;

	export let component: typeof SvelteComponent;
</script>

{#if currentRoute === route}
	<svelte:component this={component} />
{/if}

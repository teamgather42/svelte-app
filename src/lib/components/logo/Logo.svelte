<script lang="ts">
	/**
	 * Make the logo a lkink which redirect to homepage.
	 */
	export let isLink: boolean = true;
	/**
	 * Class for the logo.
	 */
	let className: string = '';
	export { className as class };
</script>

<div>
	{#if isLink}
		<a data-testid="logo_link" href="/"
			><p data-testid="logo_base" class={className}>teamGather.</p></a
		>
	{:else}
		<p data-testid="logo_base" class={className}>teamGather.</p>
	{/if}
</div>

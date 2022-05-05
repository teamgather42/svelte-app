<script lang="ts">
	type Variant = 'danger' | 'success';

	/**
	 * The variant of the alert.
	 */
	export let variant: Variant = 'danger';
	/**
	 * If the alert should be shown or not.
	 */
	export let hide: boolean = true;

	export let showButton: boolean = true;

	$: componentClass =
		(variant === 'danger' && 'bg-red-100 border border-red-500 text-red-500') ||
		(variant === 'success' && 'bg-green-100 border border-green-500 text-green-500');

	const hideAlert = () => (hide = !hide);
</script>

{#if !hide}
	<section
		data-testid="alert_container"
		role="alert"
		class={`flex justify-between rounded-md w-full py-2 px-4 ${componentClass}`}
	>
		<p class="text-base font-light"><slot /></p>
		{#if showButton}
			<button on:click={hideAlert}><i class="fas fa-times" /></button>
		{/if}
	</section>
{/if}

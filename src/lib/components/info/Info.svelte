<script lang="ts">
	/**
	 * The title of the card.
	 */
	export let title: string = '';
	/**
	 * The subtitle of the card.
	 */
	export let subtitle: string = '';
	/**
	 * Posibility to hide the card
	 */
	export let hide: boolean = false;
</script>

{#if !hide}
	<section
		role="alert"
		class="flex bg-teal-100 w-fit border-t-4 border-teal-500 shadow-md p-2 pr-4 max-w-xl"
	>
		<div class="px-4 pt-2">
			<i class="fas fa-info-circle fa-lg text-teal-500" />
		</div>
		<section class="text-teal-900">
			{#if title}
				<p class="text-base font-bold">{title}</p>
			{/if}
			{#if subtitle}
				<p class="text-sm">
					{subtitle}
				</p>
			{/if}
		</section>
	</section>
{/if}

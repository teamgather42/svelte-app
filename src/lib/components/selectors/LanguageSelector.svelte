<script lang="ts">
	import { locales, locale, localesToText } from '$lib/i18n';
	import { Modal, Fa } from '$lib/components/';

	let closeModal: boolean = false;

	$: localePrefix = $locale.split('-')[0];

	const changeLocale = (value) => {
		locale.set(value);
		setTimeout(() => (closeModal = !closeModal), 0);
	};
</script>

<Modal
	buttonIcon={['fas', 'language']}
	iconPosition="left"
	buttonText="Language"
	modalTitle="Change language"
	{closeModal}
>
	<ul slot="modalContent" class="modal-container">
		{#each $locales as item}
			<li class="w-full hover:bg-gray-100 text-gray-600 hover:text-black">
				{#if item.startsWith(localePrefix)}
					<button class="w-full text-left py-2 pl-2">
						<Fa icon={['fas', 'check']} class="mr-1" iconSize="sm" iconColor="text-gray-400" />
						{localesToText[item]}
					</button>
				{:else}
					<button class="w-full text-left py-2 pl-9" on:click={() => changeLocale(item)}>
						{localesToText[item]}
					</button>
				{/if}
			</li>
		{/each}
	</ul>
</Modal>

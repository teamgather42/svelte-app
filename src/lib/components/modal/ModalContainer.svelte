<script lang="ts">
	import { ModalContent } from './index';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let element: HTMLDivElement = undefined;

	export let hidden: boolean = false;

	export let modalTitle: string = undefined;

	let container: HTMLDivElement;

	$: if (!hidden) container?.focus();

	const closeModalHandler = (event: MouseEvent): void =>
		dispatch('modalHandler', { hide: element === event.target });

	const keyboardHandler = (event: KeyboardEvent) => {
		if (event.key === 'Escape') dispatch('modalHandler', { hide: true });
	};
</script>

{#if !hidden}
	<div
		bind:this={container}
		on:keydown={keyboardHandler}
		on:click={closeModalHandler}
		class="fixed z-10 inset-0 overflow-y-auto"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
		tabIndex="0"
	>
		<div
			class="flex justify-center items-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
		>
			<div
				bind:this={element}
				class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
				aria-hidden="true"
			/>
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" />
			<ModalContent title={modalTitle}>
				<slot name="modalContent" slot="modalContent" />
			</ModalContent>
		</div>
	</div>
{/if}

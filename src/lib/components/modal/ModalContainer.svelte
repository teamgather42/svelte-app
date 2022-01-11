<script lang="ts">
	import { ModalContent } from './index';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	/**
	 * Html div element.
	 */
	export let element: HTMLDivElement = undefined;
	/**
	 * Determines if it should be displayed or not.
	 */
	export let hidden: boolean = false;
	/**
	 * Title of the modal.
	 */
	export let modalTitle: string = undefined;
	/**
	 * Additional class for the modal title.
	 */
	export let modalTitleClass: string = '';

	let container: HTMLDivElement;

	/**
	 * Focus the container for accessibility.
	 */
	$: if (!hidden) container?.focus();

	const closeModalHandler = (event: MouseEvent): void =>
		dispatch('modalHandler', { hide: element === event.target });

	const keyboardHandler = (event: KeyboardEvent): void => {
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
			<ModalContent title={modalTitle} titleClass={modalTitleClass}>
				<slot name="modalContent" slot="modalContent" />
			</ModalContent>
		</div>
	</div>
{/if}

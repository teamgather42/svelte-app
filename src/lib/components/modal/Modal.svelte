<script lang="ts">
	import type { IconName, IconPrefix, IconSize, Position } from '$lib/types';
	import { ModalContainer, ModalButton } from './index';

	/**
	 * Text who is displayed in the button.
	 */
	export let buttonText: string;
	/**
	 * Aria label attribute for the button.
	 */
	export let ariaLabel: string = 'modal button';
	/**
	 * Icon for the button.
	 */
	export let buttonIcon: [IconPrefix, IconName] = undefined;
	/**
	 * Position of the icon inside the button.
	 */
	export let iconPosition: Position = undefined;
	/**
	 * Additional class for the icon.
	 */
	export let iconClass: string = undefined;
	/**
	 * Size of the icon.
	 */
	export let iconSize: IconSize = 'lg';
	/**
	 * Title of the modal.
	 */
	export let modalTitle: string;
	/**
	 * Class for the title of the modal.
	 */
	export let modalTitleClass: string = '';
	/**
	 * Send an event to close the modal.
	 */
	export let closeModal: boolean = false;
	/**
	 * Determines if the modal should be shown.
	 */
	export let showModal: boolean = null;
	/**
	 * Hide the modal.
	 */
	export let hidden: boolean = true;

	$: if (!showModal || showModal) hidden = false;
	$: if (!closeModal || closeModal) hidden = true;

	const modalHandler = (event: CustomEvent) => {
		const value = event.detail.hide as boolean;
		hidden = value;
	};
</script>

<ModalContainer on:modalHandler={modalHandler} {hidden} {modalTitle} {modalTitleClass}
	><slot slot="modalContent" name="modalContent" /></ModalContainer
>
<ModalButton
	on:clickHandler={modalHandler}
	icon={buttonIcon}
	{iconSize}
	{ariaLabel}
	{iconClass}
	{iconPosition}>{buttonText}</ModalButton
>

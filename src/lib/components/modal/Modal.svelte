<script lang="ts">
	import type { IconName, IconPrefix, IconSize, Position } from '$lib/types';
	import { ModalContainer, ModalButton } from './index';

	export let buttonText: string;

	export let ariaLabel: string = 'modal button';

	export let buttonIcon: [IconPrefix, IconName] = undefined;

	export let iconPosition: Position = undefined;

	export let iconClass: string = undefined;

	export let iconSize: IconSize = 'lg';

	export let modalTitle: string;

	export let closeModal = false;

	let hidden = true;

	$: hidden = closeModal ? true : true;

	const modalHandler = (event: CustomEvent) => {
		const value = event.detail.hide as boolean;
		if (value !== undefined) hidden = value;
		else hidden = !hidden;
	};
</script>

<ModalContainer on:modalHandler={modalHandler} {hidden} {modalTitle}
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

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Link, Modal } from '$lib/components';
	import { LoginForm } from './';

	const dispatch = createEventDispatcher();
	/**
	 * Send an event to show the modal.
	 */
	export let showModal: boolean = null;
	/**
	 * Hide the modal.
	 */
	let closeModal: boolean = null;

	/**
	 * When user click on {Join Us} close this modal then open the register modal.
	 */
	const displayRegisterForm = () => {
		closeModal = !closeModal;
		dispatch('displayRegisterForm');
	};
</script>

<Modal
	{showModal}
	{closeModal}
	buttonText="Sign In"
	modalTitle="Sign In with teamGather."
	modalTitleClass="text-center text-3xl font-bold mt-3"
>
	<svelte:fragment slot="modalContent">
		<LoginForm on:authSuccess={() => (closeModal = !closeModal)} />
		<hr class="mt-3" />
		<p class="mt-2">
			Don't have an account ? <Link on:click={displayRegisterForm} to="/">Join Us</Link>
		</p>
	</svelte:fragment>
</Modal>

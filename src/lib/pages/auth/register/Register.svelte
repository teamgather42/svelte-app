<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Modal from '$lib/components/modal/Modal.svelte';
	import Link from '$lib/components/link/Link.svelte';
	import RegisterForm from './form/RegisterForm.svelte';

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
	 * When user click on {Sign In} close this modal then open the login modal.
	 */
	const displayLoginForm = () => {
		closeModal = !closeModal;
		dispatch('displayLoginForm');
	};
</script>

<Modal
	{showModal}
	{closeModal}
	buttonText="Join Us"
	modalTitle="Join teamGather."
	modalTitleClass="text-center text-3xl font-bold mt-3"
>
	<svelte:fragment slot="modalContent">
		<RegisterForm on:authSuccess={displayLoginForm} />
		<hr class="mt-3" />
		<p class="mt-2">
			Already have an account ? <Link on:click={displayLoginForm} to="/">Sign In</Link>
		</p>
	</svelte:fragment>
</Modal>

<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import TextInput from '$lib/components/input/TextInput.svelte';
	import Modal from '$lib/components/modal/Modal.svelte';

	let email: string;
	let username: string;
	let firstname: string;
	let lastname: string;
	let password: string;

	const formSubmitHandler = () => {
		console.log('ok');
	};
</script>

<Modal
	buttonText="Join Us"
	modalTitle="Join teamGather."
	modalTitleClass="text-center text-3xl font-bold mt-3"
>
	<svelte:fragment slot="modalContent">
		<form class="mt-10">
			<TextInput bind:value={email} type="text" placeholder="Email" class="w-full mb-1" />
			<TextInput bind:value={username} type="text" placeholder="Username" class="w-full mb-1" />
			<TextInput bind:value={firstname} type="text" placeholder="Firstname" class="w-full mb-1" />
			<TextInput bind:value={lastname} type="text" placeholder="Lastname" class="w-full mb-1" />
			<TextInput bind:value={password} type="password" placeholder="Password" class="w-full mb-1" />
			<section class="flex justify-center">
				<Button on:click={formSubmitHandler} class="mt-4 w-full" backgroundColor="bg-blue-500"
					>Join Us</Button
				>
			</section>
		</form>
	</svelte:fragment>
</Modal>

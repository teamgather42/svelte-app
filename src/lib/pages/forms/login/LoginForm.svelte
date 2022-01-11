<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import TextInput from '$lib/components/input/TextInput.svelte';
	import Modal from '$lib/components/modal/Modal.svelte';

	let identifier: string;
	let password: string;
</script>

<Modal
	buttonText="Sign In"
	modalTitle="Sign In with teamGather."
	modalTitleClass="text-center text-3xl font-bold mt-3"
>
	<svelte:fragment slot="modalContent">
		<form class="mt-10">
			<TextInput
				bind:value={identifier}
				type="text"
				placeholder="Email / Username"
				class="w-full"
			/>
			<TextInput bind:value={password} type="password" placeholder="Password" class="w-full mt-4" />
			<section class="flex justify-center">
				<Button class="mt-4 w-full" backgroundColor="bg-blue-500">Sign In</Button>
			</section>
		</form>
	</svelte:fragment>
</Modal>

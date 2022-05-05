<script lang="ts">
	import { onMount } from 'svelte';
	import { userAPI, UserModel } from '$lib/api';
	import { Loader, TextInput, Button, ModalContainer, Alert } from '$lib/components';
	import { removeAuthenticatedToken } from '$lib/stores';
	const { getMyAccount, disableAccount, updateUser } = userAPI;

	let user: UserModel;
	let isLoading: boolean = true;

	let username: string;
	let firstname: string;
	let lastname: string;
	let password: string;
	let confirmPassword: string;
	let fields = ['username', 'firstname', 'lastname'];
	let updateError: string = '';
	let success: boolean = null;
	let picture;

	let showModal: boolean = false;

	$: if (firstname || username || lastname) (updateError = ''), (success = null);

	onMount(async () => {
		const { data } = await getMyAccount();
		user = data.user;
		if (user) {
			username = user.username;
			firstname = user.firstname;
			lastname = user.lastname;
			picture = user.picture.uri;
		}
		isLoading = false;
	});

	const modalHandler = (event: CustomEvent) => {
		const value = event.detail.hide as boolean;
		showModal = !value;
	};

	const disableAccountHandler = async () => {
		const { error } = await disableAccount();
		if (error.length === 0) {
			removeAuthenticatedToken();
		}
	};

	const saveChangesHandler = async () => {
		let body = {};
		fields.map((value) => {
			if (user[value] !== eval(value)) body[value] = eval(value);
		});
		if (JSON.stringify(body) !== '{}') {
			const { error, data } = await updateUser(body);
			if (error.length > 0) updateError = error[0];
			else {
				success = true;
				user = data.user;
			}
		}
	};
</script>

<section class="flex flex-col items-center md:block">
	{#if picture}
		<img src={picture} alt="" class="rounded-full border-green-400 w-44 h-44" />
	{/if}
	<h1 class=" text-4xl">Account settings</h1>
	{#if !isLoading}
		<form class="w-full mt-5">
			<TextInput bind:value={username} label="Username" class="mb-4" id="username" />
			<div class="flex">
				<TextInput bind:value={firstname} class="mr-4" label="Firstname" id="firstname" />
				<TextInput bind:value={lastname} label="Lastname" id="lastname" />
			</div>
			{#if success}
				<div class="mt-4">
					<Alert variant="success" hide={false}>Accout edited successfuly</Alert>
				</div>
			{:else if updateError}
				<div class="mt-4">
					<Alert variant="danger" hide={false}>{updateError}</Alert>
				</div>
			{/if}
		</form>
		<div class="mt-5">
			<h3 class="text-2xl">Password</h3>
			<div class="flex mt-3">
				<TextInput bind:value={password} type="password" label="New Password" class="mr-4" />
				<TextInput bind:value={confirmPassword} type="password" label="Current Password" />
			</div>
		</div>
		<div class="w-full flex justify-end mt-4">
			<Button on:click={saveChangesHandler}>Save changes</Button>
		</div>
		<div class="border-t border-gray-200 mt-4">
			<h3 class="text-2xl mt-4">Disable your account</h3>
			<Button
				on:click={() => (showModal = !showModal)}
				backgroundColor="bg-red-500"
				textColor="text-white"
				class="mt-2">I want to disable my account</Button
			>
			<ModalContainer on:modalHandler={modalHandler} hidden={!showModal}>
				<svelte:fragment slot="modalContent">
					<h3 class="text-center text-xl">Are you sure to disable your account ?</h3>
					<div class="w-full flex justify-center mt-3">
						<Button on:click|once={disableAccountHandler} backgroundColor="bg-red-500">Yes</Button>
					</div>
				</svelte:fragment>
			</ModalContainer>
		</div>
	{:else}
		<div class="w-full flex justify-center mt-10">
			<Loader color="text-indigo-500" size="w-10 h-10" />
		</div>
	{/if}
</section>

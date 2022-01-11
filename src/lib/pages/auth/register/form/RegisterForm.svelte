<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { authAPI } from '$lib/api/auth';
	import TextInput from '$lib/components/input/TextInput.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import Alert from '$lib/components/alert/Alert.svelte';
	const dispatch = createEventDispatcher();
	const { useRegister } = authAPI;

	/**
	 * Email input value.
	 */
	let email: string;
	/**
	 * Username input value.
	 */
	let username: string;
	/**
	 * Firstname input value.
	 */
	let firstname: string;
	/**
	 * Lastname input value.
	 */
	let lastname: string;
	/**
	 * Password input value.
	 */
	let password: string;
	/**
	 * Show the api error message.
	 */
	let apiError: string = '';
	/**
	 * Display the alert.
	 */
	let hideAlert: boolean = false;

	/**
	 * If all the fields are not empty enable the button.
	 */
	$: disabled = !!!(email && username && firstname && lastname && password);
	/**
	 * Create a body from form data.
	 */
	$: body = { email, username, firstname, lastname, password };

	const formSubmitHandler = async () => {
		const { error, user } = await useRegister(body);
		if (error) {
			hideAlert = false;
			apiError = error;
		} else if (user) {
			dispatch('authSuccess');
		}
	};
</script>

<form class="mt-10">
	<TextInput bind:value={email} type="text" placeholder="Email" class="w-full mt-4" />
	<TextInput bind:value={username} type="text" placeholder="Username" class="w-full mt-4" />
	<TextInput bind:value={firstname} type="text" placeholder="Firstname" class="w-full mt-4" />
	<TextInput bind:value={lastname} type="text" placeholder="Lastname" class="w-full mt-4" />
	<TextInput bind:value={password} type="password" placeholder="Password" class="w-full my-4" />
	{#if apiError}
		<Alert hide={hideAlert}>{apiError}</Alert>
	{/if}
	<section class="flex justify-center">
		<Button
			{disabled}
			on:click={formSubmitHandler}
			class="mt-4 w-full"
			backgroundColor="bg-blue-500">Join Us</Button
		>
	</section>
</form>

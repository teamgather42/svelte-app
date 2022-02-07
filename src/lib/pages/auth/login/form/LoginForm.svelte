<script lang="ts">
	import { TextInput, Button, Alert } from '$lib/components';
	import { createEventDispatcher } from 'svelte';
	import { authAPI } from '$lib/api/auth';
	import { checkEmail } from '$lib/pages/auth/validator';
	import type { Login } from '$lib/api/auth';
	import { setAuthenticatedToken } from '$lib/stores';

	const { useLogin } = authAPI;
	const dispatch = createEventDispatcher();

	/**
	 * The input value for username / email.
	 */
	let identifier: string;
	/**
	 * Input value for password.
	 */
	let password: string;
	/**
	 * Api error message display.
	 */
	let apiError: string = '';
	/**
	 * Display alert when shown.
	 */
	let hideAlert: boolean = false;
	/**
	 * Add a loading spinner waiting for the request to return the data.
	 */
	let loading: boolean = false;

	/**
	 * If all the fields are not empty enable the button.
	 */
	$: disabled = !!!(identifier && password);

	const formSubmitHandler = async () => {
		loading = true;
		const isEmail = checkEmail(identifier);
		let requestBody: Login;
		// Check if the identifier is an email to pass the good body value.
		if (isEmail) requestBody = { email: identifier, password };
		else requestBody = { username: identifier, password };
		const response = await useLogin(requestBody);
		if (response.error) apiError = response.error;
		else if (response.token) {
			setAuthenticatedToken(response.token);
			// Todo set a timeout with success message.
			dispatch('authSuccess');
		}
		loading = false;
	};
</script>

<form class="mt-10">
	<TextInput bind:value={identifier} type="text" placeholder="Email / Username" class="w-full" />
	<TextInput bind:value={password} type="password" placeholder="Password" class="w-full my-4" />
	{#if apiError}
		<Alert hide={hideAlert}>{apiError}</Alert>
	{/if}
	<section class="flex justify-center">
		<Button
			{disabled}
			{loading}
			on:click={formSubmitHandler}
			class="mt-4 w-full"
			backgroundColor="bg-blue-500">Sign In</Button
		>
	</section>
</form>

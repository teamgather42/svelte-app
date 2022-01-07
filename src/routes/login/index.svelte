<script lang="ts">
	import { authAPI } from '$lib/api/auth';
	const { useLogin } = authAPI;

	let requestBody;
	$: requestBody = { username, password };
	let password: string = '';
	let username: string = '';
	let token: string = '';
	let error: string = '';

	const submitHandler = async () => {
		const response = await useLogin(requestBody);
		token = response.token;
		error = response.error;
	};
</script>

<main>
	<form>
		<section>
			<label for="username">username</label>
			<input bind:value={username} type="text" id="username" />
		</section>
		<section>
			<label for="password">password</label>
			<input bind:value={password} type="password" id="password" />
		</section>
		<button on:click|preventDefault={submitHandler}>Login</button>
		{#if token}
			<p>token : {token}</p>
		{:else if error}
			<p>{error}</p>
		{/if}
	</form>
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 300px;
	}
</style>

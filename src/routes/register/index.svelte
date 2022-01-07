<script lang="ts">
	import { authAPI } from '$lib/api/auth';
	const { useRegister } = authAPI;

	let requestBody;
	let username: string = '';
	let firstname: string = '';
	let lastname: string = '';
	let password: string = '';
	let email: string = '';
	let error: string = '';
	let userId: string = '';
	$: requestBody = { username, firstname, lastname, password, email };

	const submitHandler = async () => {
		const { error: err, user } = await useRegister(requestBody);
		error = err;
		userId = user.id;
	};
</script>

<main>
	<form>
		<section>
			<label for="username">Username</label>
			<input bind:value={username} type="text" id="username" />
		</section>
		<section>
			<label for="firstname">firstname</label>
			<input bind:value={firstname} type="text" id="firstname" />
		</section>
		<section>
			<label for="lastname">lastname</label>
			<input bind:value={lastname} type="text" id="lastname" />
		</section>
		<section>
			<label for="password">password</label>
			<input bind:value={password} type="password" id="password" />
		</section>
		<section>
			<label for="email">email</label>
			<input bind:value={email} type="email" id="email" />
		</section>

		<button on:click|preventDefault={submitHandler}>Register</button>
		{#if error}
			<p>Error : {error}</p>
		{:else if userId}
			<p>Success : {userId}</p>
		{/if}
	</form>
</main>

<style>
	form {
		max-width: 300px;
		display: flex;
		flex-direction: column;
	}
</style>

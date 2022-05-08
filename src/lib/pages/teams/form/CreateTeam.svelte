<script lang="ts">
	import { TextInput, Button } from '$lib/components';
	import { authenticatedToken } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let files;
	let teamName: string = '';

	const submitFormHandler = async () => {
		var myHeaders = new Headers();
		myHeaders.append('Authorization', 'Bearer ' + $authenticatedToken);

		var formdata = new FormData();
		formdata.append('teamName', teamName);
		if (files && files.length > 0) formdata.append('file', files[0], files[0].name);
		formdata.append('tags', 'z');

		var requestOptions: Partial<RequestInit> = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'follow'
		};

		await fetch(
			`${import.meta.env.API_BASE_URL}/${import.meta.env.API_VERSION}/team`,
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
		dispatch('teamCreated');
	};

	$: if (files) console.log(files);
</script>

<form>
	<TextInput label="Team name" bind:value={teamName} />
	<input accept=".jpg, .jpeg, .png" bind:files type="file" multiple={false} />
	<Button on:click={submitFormHandler} class="mt-3">Submit</Button>
</form>

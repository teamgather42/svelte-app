<script lang="ts">
	import { TextInput, Button } from '$lib/components';
	import { authenticatedToken } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import axios from 'axios';
	import FormData from 'form-data';

	const dispatch = createEventDispatcher();

	let files;
	let teamName: string = '';
	let fileElement: HTMLLabelElement;
	let avatar;
	let tagInputValue: string;
	let tags: string[] = [];

	const submitFormHandler = async () => {
		// var myHeaders = new Headers();
		// myHeaders.append('Authorization', 'Bearer ' + $authenticatedToken);

		// var formdata = new FormData();
		// formdata.append('teamName', teamName);
		// if (files && files.length > 0) formdata.append('file', files[0], files[0].name);
		// formdata.append('tags', tags.join(','));

		// var requestOptions: Partial<RequestInit> = {
		// 	method: 'POST',
		// 	headers: myHeaders,
		// 	body: formdata,
		// 	redirect: 'follow'
		// };

		// await fetch(
		// 	`${import.meta.env.API_BASE_URL}/${import.meta.env.API_VERSION}/team`,
		// 	requestOptions
		// )
		// 	.then((response) => response.text())
		// 	.then((result) => console.log(result))
		// 	.catch((error) => console.log('error', error));

		var data = new FormData();
		data.append('teamName', teamName);
		if (files && files.length > 0) data.append('file', files[0], files[0].name);
		data.append('tags', tags.join(','));

		var config = {
			method: 'post',
			url: 'http://localhost:8080/api/v1/team',
			headers: {
				Authorization: 'Bearer ' + $authenticatedToken
			},
			data: data
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});

		dispatch('teamCreated');
	};

	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			avatar = e.target.result;
		};
	};

	const tagHandler = () => {
		if (tagInputValue.length > 1 && !tags.includes(tagInputValue)) tags = [...tags, tagInputValue];
		tagInputValue = '';
	};

	$: if (files) console.log(files);
</script>

<form>
	<TextInput label="Team name" bind:value={teamName} />
	<div class="flex items-end">
		<TextInput bind:value={tagInputValue} label="Team tags" />
		<Button class="my-2 h-[50px]" on:click={tagHandler}>Add</Button>
	</div>
	<div class="flex">
		{#each tags as tag}
			<p
				class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full mx-1"
			>
				{tag}
			</p>
		{/each}
	</div>
	<div class="mt-3">
		<label
			bind:this={fileElement}
			class="form-control flex justify-between items-center w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
			for="file"
		>
			Team picture
			<input
				on:change={onFileSelected}
				id="file"
				class="hidden"
				accept=".jpg, .jpeg, .png"
				bind:files
				type="file"
				multiple={false}
			/>
			<Button on:click={() => fileElement?.click()}>Upload</Button>
		</label>
		<div class="flex justify-center mt-3">
			{#if avatar}
				<img src={avatar} alt="" />
			{/if}
		</div>
	</div>
	<Button on:click={submitFormHandler} class="mt-3">Submit</Button>
</form>

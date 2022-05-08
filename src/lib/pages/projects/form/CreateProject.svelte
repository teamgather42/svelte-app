<script lang="ts">
	import { projectAPI } from '$lib/api';
	import { TextInput, Button } from '$lib/components';
	import DatePicker from '@beyonk/svelte-datepicker/src/components/DatePicker.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const { useCreate } = projectAPI;

	let projectName: string = '',
		projectDescription: string = '',
		tags = ['test', 'test2'],
		selected;

	const submitFormHandler = async () => {
		const body = {
			name: projectName,
			description: projectDescription,
			startDate: selected?.from,
			endDate: selected?.to,
			tags
		};

		useCreate(body);
		dispatch('projectCreated');
	};
</script>

<form>
	<TextInput label="Project name" bind:value={projectName} />
	<TextInput label="Project description" bind:value={projectDescription} />
	<p>Durée</p>
	<DatePicker range on:range-selected={(e) => (selected = e.detail)} />
	<Button on:click={submitFormHandler} class="mt-3">Submit</Button>
</form>

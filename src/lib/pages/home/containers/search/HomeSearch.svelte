<script lang="ts">
	import { TextInput } from '$lib/components';
	import type { IconName, IconPrefix } from '$lib/types';
	import { goto } from '$app/navigation';
	import { debounce } from '$lib/utils/debounce';
	import { t } from '$lib/i18n';
	import Filter from '$lib/components/filter/Filter.svelte';

	let showSelect: boolean = false;
	let menu: HTMLDivElement;
	let searchValue: string;
	let inputFocused: boolean = false;

	type Options = {
		label: string;
		icon: [IconPrefix, IconName];
	};

	let selectedOption: Options = null;

	const options: Options[] = [
		{
			label: 'home.search.select.teams.title',
			icon: ['fas', 'users']
		},
		{
			label: 'home.search.select.users.title',
			icon: ['fas', 'user']
		},
		{
			label: 'home.search.select.projects.title',
			icon: ['fas', 'project-diagram']
		}
	];

	$: if (options.length > 0) selectedOption = options[0];

	$: if (searchValue) debounce(() => searchHandler());

	const searchHandler = () => {
		if (searchValue.length > 2) {
			console.log('ok');
		}
	};

	const keyboardEvent = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			searchValue.length > 0 &&
				goto(
					`http://localhost:3000/search?query=${searchValue.toLowerCase()}&target=${
						selectedOption.label.split('.')[3]
					}`
				);
		}
	};
</script>

<section class="grid grid-cols-5 lg:py-16 py-4">
	<div class="col-span-12 lg:col-span-3 select-none">
		<img src="/assets/Teamworkart.jpg" alt="" />
	</div>
	<div
		class="md:px-1O lg:px-4 xl:px-24 col-span-12 w-10/12 md:w-3/4 lg:w-full mx-auto lg:col-span-2 flex flex-col items-center justify-center"
	>
		<h1 class="text-4xl mb-4">{$t('home.search.title.message')}</h1>
		<form class="w-full flex">
			<TextInput
				on:keydown={keyboardEvent}
				on:focus={() => (inputFocused = true)}
				on:blur={() => (inputFocused = false)}
				bind:value={searchValue}
				class="rounded-r-none border-r-0 focus:z-20"
			/>
			<Filter on:selectedOption={(event) => (selectedOption = event.detail.value)} {options} />
		</form>
	</div>
</section>

<script lang="ts">
	import { Button, ModalContainer } from '$lib/components';
	import { CreateProject } from './form';
	import { authenticatedToken, decodedToken } from '$lib/stores';
	import { onMount } from 'svelte';
	import { projectAPI } from '$lib/api';
	import TeamCard from '$lib/components/card/TeamCard.svelte';
	const { useGetAll } = projectAPI;

	let showCreateForm: boolean = false;
	let projects;

	const modalHandler = (event: CustomEvent) => {
		const value = event.detail.hide as boolean;
		showCreateForm = !value;
	};

	onMount(async () => {
		await loadDatas();
	});

	const loadDatas = async () => {
		const {
			data: { projects: teamList }
		} = await useGetAll();
		projects = teamList;
	};

	const projectCreated = () => {
		setTimeout(() => {
			showCreateForm = false;
			loadDatas();
		}, 0);
	};
</script>

<section class="px-16 mt-12">
	<h1 class=" text-3xl">Projects</h1>
	<p>List of projects on teamGather</p>
	<div class="w-full flex justify-end">
		{#if $authenticatedToken && $decodedToken.roles.includes('RECRUITER')}
			<Button
				on:click={() => (showCreateForm = !showCreateForm)}
				iconColor="text-white"
				class="h-[2.5rem] w-[2.5rem] bg-[#9CA3AF] mr-4"
				rounded="rounded-full"
				icon={['fas', 'plus']}
				position="center"
			/>
			<ModalContainer
				on:modalHandler={modalHandler}
				modalTitle="Create Project"
				hidden={!showCreateForm}
				><svelte:fragment slot="modalContent"
					><CreateProject on:projectCreated={projectCreated} /></svelte:fragment
				></ModalContainer
			>
		{/if}
	</div>
	<section class="grid grid-cols-2 gap-3 mt-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
		{#if projects}
			{#each projects as { name, picture: { uri }, description }}
				<TeamCard {description} title={name} href={`/team/${name}`} src={uri} />
			{/each}
		{:else}
			<p>No projects</p>
		{/if}
	</section>
</section>

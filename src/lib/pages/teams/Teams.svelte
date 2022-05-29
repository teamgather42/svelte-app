<script lang="ts">
	import { Button, Filter, ModalContainer } from '$lib/components';
	import { CreateTeam } from './form';
	import { authenticatedToken, decodedToken } from '$lib/stores';
	import { onMount } from 'svelte';
	import { teamAPI } from '$lib/api';
	import TeamCard from '$lib/components/card/TeamCard.svelte';
	const { useGetAll } = teamAPI;

	let showCreateForm: boolean = false;
	let teams;

	const modalHandler = (event: CustomEvent) => {
		const value = event.detail.hide as boolean;
		showCreateForm = !value;
	};

	onMount(async () => {
		await loadDatas();
	});

	const loadDatas = async () => {
		const {
			data: { teams: teamList }
		} = await useGetAll();
		teams = teamList;
	};

	const teamCreated = () => {
		setTimeout(() => {
			showCreateForm = false;
			loadDatas();
		}, 0);
	};
</script>

<section class="container mx-auto mt-12">
	<h1 class=" text-3xl">Teams</h1>
	<p>List of teams on teamGather</p>
	<div class="w-full flex justify-end">
		{#if $authenticatedToken && $decodedToken.roles.includes('WORKER')}
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
				modalTitle="Create Team"
				hidden={!showCreateForm}
				><svelte:fragment slot="modalContent"
					><CreateTeam on:teamCreated={teamCreated} /></svelte:fragment
				></ModalContainer
			>
		{/if}
	</div>
	<section class="grid grid-cols-2 gap-3 mt-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
		{#if teams}
			{#each teams as { teamName, picture: { uri } }}
				<TeamCard title={teamName} href={`/team/${teamName}`} src={uri} />
			{/each}
		{:else}
			<p>No teams</p>
		{/if}
	</section>
</section>

<script lang="ts">
	import { teamAPI } from '$lib/api';
	import { onMount } from 'svelte';
	const { useGetMemberTeam, useGetAdminteam } = teamAPI;

	let adminTeam: any[] = [],
		memberTeam: any[] = [];

	onMount(async () => {
		await useGetAdminteam().then(({ data: { teams } }) => {
			adminTeam = teams;
		});
		await useGetMemberTeam().then(({ data: { teams } }) => {
			memberTeam = teams.filter((value) => {
				adminTeam.forEach((value2) => {
					if (value.id === value2.id) {
						return false;
					}
					return true;
				});
			});
		});
	});
</script>

<section>
	<h1 class="text-4xl">Teams</h1>
	{#if adminTeam && adminTeam.length > 0}
		<h2 class="mt-4">Mes équipes en tant que admin</h2>
		<ul class="flex flex-col p-4">
			{#each adminTeam as team}
				<li class="border-gray-400 flex flex-row">
					<div
						class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400"
					>
						<div class="flex-1 pl-1 mr-16">
							<p class="font-medium">{team.teamName}</p>
						</div>
						<button
							class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2"
						>
							Leave
						</button>
						<a
							href={'/team/' + team.teamName}
							class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-blue-500 justify-center items-center mr-10 p-2"
						>
							Details
						</a>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
	{#if memberTeam && memberTeam.length > 0}
		<h2 class="mt-4">Mes équipes en tant que membre</h2>
		<ul>
			{#each memberTeam as team}
				<li class="border-gray-400 flex flex-row">
					<div
						class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400"
					>
						<div class="flex-1 pl-1 mr-16">
							<p class="font-medium">{team.teamName}</p>
						</div>
						<button
							class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2"
						>
							Leave
						</button>
						<a
							href={'/team/' + team.teamName}
							class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-blue-500 justify-center items-center mr-10 p-2"
						>
							Details
						</a>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</section>

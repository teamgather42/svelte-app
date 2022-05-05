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

	$: console.log(adminTeam);
	$: console.log(memberTeam);
</script>

<section>
	<h1 class="text-4xl">Teams</h1>
	{#if adminTeam && adminTeam.length > 0}
		<h2 class="mt-4">Mes équipes en tant que admin</h2>
		<ul>
			{#each adminTeam as team}
				<p>{team.teamName}</p>
			{/each}
		</ul>
	{/if}
	{#if memberTeam && memberTeam.length > 0}
		<h2 class="mt-4">Mes équipes en tant que membre</h2>
		<ul>
			{#each memberTeam as team}
				<p>{team.teamName}</p>
			{/each}
		</ul>
	{/if}
</section>

<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { teamAPI } from '$lib/api';
	import { Loader } from '$lib/components';
	const { useGetOneByName } = teamAPI;
	import type { Team } from '$lib/api';

	let teamName: string, createdDate;
	let team: Team = [];
	onMount(() => {
		teamName = $page.params.team;
		loadDatas();
	});

	const loadDatas = async () => {
		const {
			data: { team: teamData }
		} = await useGetOneByName(teamName);
		team = teamData;
	};

	$: if (team?.createdAt) createdDate = new Date(team.createdAt).toLocaleDateString('fr');
	$: console.log(team);
</script>

{#if team?.length === 0}
	<div class="flex justify-center">
		<Loader />
	</div>
{:else}
	<div class="container mx-auto my-5 p-5">
		<div class="md:flex no-wrap md:-mx-2 ">
			<!-- Left Side -->
			<div class="w-full md:w-3/12 md:mx-2">
				<!-- Profile Card -->
				<div class="bg-white p-3 border-t-4 border-green-400">
					<div class="image overflow-hidden">
						<img
							class="h-auto w-full mx-auto"
							src={team?.picture.uri || 'https://via.placeholder.com/150'}
							alt=""
						/>
					</div>
					<h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{team?.teamName}</h1>
					<ul
						class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
					>
						<li class="flex items-center py-3">
							<span>Status</span>
							{#if !team?.deletedAt}
								<span class="ml-auto"
									><span class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span
									></span
								>
							{:else}
								<span class="ml-auto"
									><span class="bg-red-500 py-1 px-2 rounded text-white text-sm">Not active</span
									></span
								>
							{/if}
						</li>
						<li class="flex items-center py-3">
							<span>Team since</span>
							<span class="ml-auto">{createdDate}</span>
						</li>
					</ul>
				</div>
				<div class="my-4" />
				<div class="bg-white p-3 hover:shadow">
					<div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
						<span class="text-green-500">
							<svg
								class="h-5 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</span>
						<span>Users</span>
					</div>
					<div class="grid grid-cols-3">
						{#each team?.members as member}
							<a href={'/user/' + member.username} class="text-main-color">
								<div class="text-center my-2">
									<img class="h-16 w-16 rounded-full mx-auto" src={member.picture.uri} alt="" />
									<p class="text-main-color">{member.username}</p>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
			<div class="w-full md:w-9/12 mx-2 h-64">
				<div class="bg-white p-3 shadow-sm rounded-sm">
					<div class="grid grid-cols-2">
						<div>
							<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
								<span class="text-green-500">
									<svg
										class="h-5"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								</span>
								<span class="tracking-wide">Projects</span>
							</div>
							<ul class="list-inside space-y-2">
								<li>
									<div class="text-teal-600">Owner at Her Company Inc.</div>
									<div class="text-gray-500 text-xs">March 2020 - Now</div>
								</li>
								<li>
									<div class="text-teal-600">Owner at Her Company Inc.</div>
									<div class="text-gray-500 text-xs">March 2020 - Now</div>
								</li>
								<li>
									<div class="text-teal-600">Owner at Her Company Inc.</div>
									<div class="text-gray-500 text-xs">March 2020 - Now</div>
								</li>
								<li>
									<div class="text-teal-600">Owner at Her Company Inc.</div>
									<div class="text-gray-500 text-xs">March 2020 - Now</div>
								</li>
							</ul>
						</div>
					</div>
					<!-- End of Experience and education grid -->
				</div>
				<!-- End of profile tab -->
			</div>
		</div>
	</div>
{/if}

<script lang="ts">
	import { teamAPI } from '$lib/api';

	import { inviteAPI } from '$lib/api/invite';
	import { onMount } from 'svelte';

	const { useGetMyInvite } = inviteAPI;
	const { useJoinTeam } = teamAPI;

	let invitations = null;

	onMount(async () => {
		loadDatas();
	});

	const loadDatas = async () => {
		const { data, error } = await useGetMyInvite();
		invitations = data.invitesLinks;
	};

	const acceptHandler = async (token, userId, teamId) => {
		await useJoinTeam({ userId, teamId }, token);
		loadDatas();
	};

	const declineHandler = async (token) => {
		var myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${token}`);

		var requestOptions: Partial<RequestInit> = {
			method: 'DELETE',
			headers: myHeaders,
			redirect: 'follow'
		};

		await fetch(
			`${import.meta.env.API_BASE_URL}/${import.meta.env.API_VERSION}/invites-links`,
			requestOptions
		);
		loadDatas();
	};
</script>

<section class="flex flex-col items-center md:block">
	<h1 class=" text-4xl">Notifications</h1>
	{#if invitations === null}
		<p>Aucune notification</p>
	{:else}
		<ul>
			{#each invitations as invitation}
				<li class="border-gray-400 flex flex-row bg-white w-full">
					<div
						class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400"
					>
						<div class="flex-1 pl-1 mr-16">
							<p class="font-medium">
								{invitation.user.username} invited you to join {invitation.team.teamName}
							</p>
						</div>
						<button
							on:click={() =>
								acceptHandler(invitation.token, invitation.user.id, invitation.team.id)}
							class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-green-500 justify-center items-center mr-1 p-2"
						>
							Accept
						</button>
						<button
							on:click={() => declineHandler(invitation.token)}
							class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2"
						>
							Decline
						</button>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</section>

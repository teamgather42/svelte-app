<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { authGuard } from '$lib/utils/auth-guard';
	import { authenticatedToken } from '$lib/stores';
	import { Route } from '$lib/components';
	import { browser } from '$app/env';
	import { Settings, Projects, Teams, Notification } from '$lib/pages/account/containers';

	const checkIsLoggedIn = () => {
		if (!authGuard()) browser && goto('/');
	};

	authenticatedToken.subscribe(() => checkIsLoggedIn());

	onMount(() => {
		if (!authGuard()) browser && goto('/');
	});

	type RoutePath = 'edit_profile' | 'teams' | 'projects' | 'notification';

	let currentRoute: RoutePath = 'edit_profile';
</script>

<section class="grid grid-cols-3 lg:grid-cols-4 mt-10">
	<aside
		class="md:col-span-1 col-span-3 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center"
	>
		<h1 class="text-3xl">Settings</h1>
		<div>
			<ul class="mt-3">
				<li class="w-full">
					<button
						on:click={() => (currentRoute = 'edit_profile')}
						class="hover:bg-gray-100 rounded-full py-2 px-4 text-gray-600 hover:text-black w-full justify-center flex items-center"
					>
						Profile
					</button>
				</li>
				<li class="w-full">
					<button
						on:click={() => (currentRoute = 'teams')}
						class="hover:bg-gray-100 rounded-full py-2 px-4 text-gray-600 hover:text-black w-full justify-center flex items-center"
					>
						Teams
					</button>
				</li>
				<li class="w-full">
					<button
						on:click={() => (currentRoute = 'projects')}
						class="hover:bg-gray-100 rounded-full py-2 px-4 text-gray-600 hover:text-black w-full justify-center flex items-center"
					>
						Projects
					</button>
				</li>
				<li class="w-full">
					<button
						on:click={() => (currentRoute = 'notification')}
						class="hover:bg-gray-100 rounded-full py-2 px-4 text-gray-600 hover:text-black w-full justify-center flex items-center"
					>
						Notifications
					</button>
				</li>
			</ul>
		</div>
	</aside>
	<section class="col-span-2 md:pl-16 md:pt-16 p-0 w-screen md:w-auto px-10">
		<Route {currentRoute} route={'edit_profile'} component={Settings} />
		<Route {currentRoute} route={'teams'} component={Teams} />
		<Route {currentRoute} route={'projects'} component={Projects} />
		<Route {currentRoute} route={'notification'} component={Notification} />
	</section>
</section>

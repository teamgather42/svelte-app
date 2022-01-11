<script lang="ts">
	import Logo from '$lib/components/logo/Logo.svelte';
	import Login from '$lib/pages/auth/login/Login.svelte';
	import Register from '$lib/pages/auth/register/Register.svelte';
	import MobileMenu from './mobile-menu/MobileMenu.svelte';
	import { generalTab } from './nav.links';
	import { debounce } from '$lib/utils/debounce';
	import { authenticatedToken, setAuthenticatedToken } from '$lib/stores/';
	import Button from '$lib/components/button/Button.svelte';

	type Screen = 'login' | 'register';

	let showRegisterFormEvent: boolean = null;
	let showLoginFormEvent: boolean = null;

	const debounceDisplay = debounce((screen: Screen) => modalDisplayHandler(screen));

	const modalDisplayHandler = (screen?: Screen) =>
		screen === 'login'
			? (showLoginFormEvent = !showLoginFormEvent)
			: (showRegisterFormEvent = !showRegisterFormEvent);
</script>

<header class="flex justify-between items-center py-3 px-6 shadow-sm">
	<MobileMenu />
	<section class="md:pr-10 md:mr-10 md:border-r-2 md:py-3">
		<Logo class="font-archivo text-lg md:text-2xl" />
	</section>
	<nav class="hidden md:flex justify-between w-full">
		<ul class="flex items-center">
			{#each generalTab as { href, label }}
				<li class="mr-7 font-bold"><a {href}>{label}</a></li>
			{/each}
		</ul>
		<section class="flex">
			{#if !$authenticatedToken}
				<Login
					on:displayRegisterForm={() => debounceDisplay('register')}
					showModal={!showLoginFormEvent}
				/>
				<Register
					on:displayLoginForm={() => debounceDisplay('login')}
					showModal={!showRegisterFormEvent}
				/>
			{:else}
				<Button on:click={() => setAuthenticatedToken(null)}>Logout</Button>
			{/if}
		</section>
	</nav>
	<div class="block w-[2rem] md:hidden" />
</header>

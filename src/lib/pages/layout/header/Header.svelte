<script lang="ts">
	import { Logo } from '$lib/components';
	import { Login, Register } from '$lib/pages/auth';
	import { generalTab } from './nav.links';
	import { debounce } from '$lib/utils/debounce';
	import { authenticatedToken } from '$lib/stores';
	import { page } from '$app/stores';
	import { Dropdown } from './';
	import { scale } from 'svelte/transition';

	type Screen = 'login' | 'register';

	let showRegisterFormEvent: boolean = null;
	let showLoginFormEvent: boolean = null;
	let hideRegisterFormEvent: boolean = null;
	let hideLoginFormEvent: boolean = null;
	let showMobileMenu: boolean = true;

	const debounceDisplay = debounce((screen: Screen) => modalDisplayHandler(screen));

	const modalDisplayHandler = (screen?: Screen) => {
		if (screen === 'login') {
			hideRegisterFormEvent = !hideLoginFormEvent;
			showLoginFormEvent = !showLoginFormEvent;
		} else if (screen === 'register') {
			hideLoginFormEvent = !hideLoginFormEvent;
			showRegisterFormEvent = !showRegisterFormEvent;
		}
	};

	const showMobileMenuHandler = () => {
		showMobileMenu = !showMobileMenu;
	};
</script>

<header class="bg-white border-gray-200 px-2 sm:px-4 py-5 border-b">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<Logo class="text-2xl font-archivo" isLink />
		<div class="flex items-center md:order-2">
			{#if $authenticatedToken}
				<Dropdown />
			{:else}
				<Login
					on:displayRegisterForm={() => debounceDisplay('register')}
					closeModal={hideLoginFormEvent}
					showModal={!showLoginFormEvent}
				/>
				<Register
					on:displayLoginForm={() => debounceDisplay('login')}
					closeModal={hideRegisterFormEvent}
					showModal={!showRegisterFormEvent}
				/>
			{/if}
			<button
				on:click={showMobileMenuHandler}
				data-collapse-toggle="mobile-menu-2"
				type="button"
				class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
				aria-controls="mobile-menu-2"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/></svg
				>
				<svg
					class="hidden w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
		<div
			class:hidden={showMobileMenu}
			class="justify-between items-center w-full md:flex md:w-auto md:order-1"
			id="mobile-menu-2"
		>
			<ul
				in:scale={{ duration: 100, start: 0.95 }}
				out:scale={{ duration: 75, start: 0.95 }}
				class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
			>
				{#each generalTab as { href, label }}
					{#if $page.url.pathname === href}
						<li>
							<a
								{href}
								class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
								aria-current="page">{label}</a
							>
						</li>
					{:else}
						<li>
							<a
								{href}
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:bg-transparent "
								>{label}</a
							>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
</header>

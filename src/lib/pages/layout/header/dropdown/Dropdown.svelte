<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { removeAuthenticatedToken } from '$lib/stores';
	import { Fa } from '$lib/components/';

	let show: boolean = false; // menu state
	let menu = null; // menu wrapper DOM reference

	const handleOutsideClick = (event: MouseEvent) => {
		if (show && !menu.contains(event.target)) {
			show = false;
		}
	};

	const handleEscape = (event: KeyboardEvent) => {
		if (show && event.key === 'Escape') {
			show = false;
		}
	};

	const dropdownDisplayHandler = () => (show = !show);

	onMount(() => {
		// add events when element is added to the DOM
		document.addEventListener('click', handleOutsideClick, false);
		document.addEventListener('keyup', handleEscape, false);

		// remove events when element is removed from the DOM
		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
			document.removeEventListener('keyup', handleEscape, false);
		};
	});

	const logoutHandler = () => {
		show = !show;
		removeAuthenticatedToken();
	};
</script>

<div class="relative" bind:this={menu}>
	<button
		on:click={dropdownDisplayHandler}
		type="button"
		class="menu flex mr-3 text-sm bg-[#9CA3AF] rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 p-2"
		id="user-menu-button"
		aria-expanded="false"
		data-dropdown-toggle="dropdown"
	>
		<Fa icon={['fas', 'user']} iconSize="lg" iconColor="text-white" />
	</button>

	{#if show}
		<div
			in:scale={{ duration: 100, start: 0.95 }}
			out:scale={{ duration: 75, start: 0.95 }}
			class="origin-top-right absolute right-0 w-48 py-2 mt-1 bg-white rounded shadow-xl"
		>
			<a
				on:click={dropdownDisplayHandler}
				href="/account"
				class="block px-4 py-2 w-full text-left hover:bg-blue-700 hover:text-green-100">Account</a
			>
			<button
				on:click={logoutHandler}
				class="block px-4 py-2 w-full text-left hover:bg-blue-700 hover:text-green-100"
				>Logout</button
			>
		</div>
	{/if}
</div>

<style>
	:global(button > i) {
		width: 20px;
		height: 20px;
		padding-top: 2px;
	}
</style>

<script lang="ts">
	import { Fa, LanguageSelector, CurrencySelector } from '$lib/components';
	import { Login, Register } from '$lib/pages/auth';
	import { MenuList, MenuToggler } from '../';
	import { authenticatedToken } from '$lib/stores';
	import { generalTab } from '../nav.links';

	let showMenu: boolean = false;

	const menuDisplayHandler = () => (showMenu = !showMenu);
</script>

<MenuToggler on:click={menuDisplayHandler} />

<aside
	class="md:hidden bg-white w-3/4 absolute left-0 top-0 h-screen shadow-md"
	class:hidden={!showMenu}
>
	<div class="inline-block w-full pr-3 pt-3">
		<button on:click={menuDisplayHandler} class="float-right"
			><Fa icon={['fas', 'times']} iconSize="lg" /></button
		>
	</div>
	<nav>
		{#if !authenticatedToken}
			<section class="w-full flex items-center flex-col px-20">
				<Login />
				<Register />
			</section>
		{/if}
		<section class="px-4 mt-10">
			<MenuList on:linkHandler={menuDisplayHandler} options={generalTab} heading="General" />
		</section>
		<section class="px-4">
			<h2 class="border-b text-xl mb-2">Options</h2>
			<ul>
				<li class="mb-2"><LanguageSelector /></li>
				<li><CurrencySelector /></li>
			</ul>
		</section>
	</nav>
</aside>

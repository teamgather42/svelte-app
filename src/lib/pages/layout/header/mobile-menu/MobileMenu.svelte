<script lang="ts">
	import Fa from '$lib/components/fontawesome/Fa.svelte';
	import Link from '$lib/components/link/Link.svelte';
	import MenuList from '../menu-list/MenuList.svelte';
	import MenuToggler from '../menu-toggler/MenuToggler.svelte';
	import { generalTab } from '../nav.links';

	let showMenu: boolean = true;

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
		<section class="w-full flex items-center flex-col px-20">
			<Link
				class="mb-3 w-full text-center"
				on:click={menuDisplayHandler}
				to="/register"
				displayAs="button">Join us</Link
			>
			<Link class="w-full text-center" on:click={menuDisplayHandler} to="/login" displayAs="button"
				>Log in</Link
			>
		</section>
		<section class="px-4 mt-10">
			<MenuList options={generalTab} heading="General" />
		</section>
	</nav>
</aside>

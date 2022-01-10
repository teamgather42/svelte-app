<script>
	import Logo from '$lib/components/logo/Logo.svelte';
	import MobileMenu from './mobile-menu/MobileMenu.svelte';
</script>

<header class="flex justify-between items-center py-3 px-6 relative">
	<MobileMenu />
	<section>
		<Logo class="font-archivo text-lg md:text-2xl" />
	</section>
	<div class="block w-[2rem] md:hidden" />
</header>

<script>
	import Logo from '$lib/components/logo/Logo.svelte';
	import LoginForm from '$lib/pages/forms/login/LoginForm.svelte';
	import RegisterForm from '$lib/pages/forms/register/RegisterForm.svelte';
	import MobileMenu from './mobile-menu/MobileMenu.svelte';
	import { generalTab } from './nav.links';
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
			<LoginForm />
			<RegisterForm />
		</section>
	</nav>
	<div class="block w-[2rem] md:hidden" />
</header>

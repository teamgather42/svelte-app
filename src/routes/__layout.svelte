<script lang="ts">
	import { initI18n } from '$lib/i18n';
	import { Header, Footer } from '$lib/pages/layout/index';
	import '../base.css';

	initI18n();
</script>

<svelte:head>
	<!-- Font Awesome -->
	<script src="https://kit.fontawesome.com/fc13e8f391.js" crossorigin="anonymous"></script>
</svelte:head>

<Header />

<main class="min-h-screen">
	<slot />
</main>

<Footer />

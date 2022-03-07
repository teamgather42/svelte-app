<script lang="ts">
	import { Card } from '$lib/components';
	import { t } from '$lib/i18n';
</script>

<section class=" bg-gray-200 w-full py-8 lg:px-28">
	<h1 class="text-3xl ml-8 md:ml-4">Our services in 3 steps</h1>
	<section class="flex justify-between mt-5 flex-col md:flex-row">
		<Card title={$t('home.services.card1.title')} index={1} imgSrc="/assets/teamwork.png" />
		<Card title={$t('home.services.card2.title')} index={2} imgSrc="/assets/rocket.png" />
		<Card title={$t('home.services.card3.title')} index={3} imgSrc="/assets/rating.png" />
	</section>
</section>

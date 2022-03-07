<script lang="ts">
	export let index: number;
	export let title: string;
	export let imgSrc: string;
</script>

<article class="bg-white md:w-[30%] w-3/4 rounded-md py-5 px-6 mx-auto mt-6">
	<h2 class=" font-roboto_c italic text-3xl font-bold">{index}.</h2>
	<p class="text-lg">{title}</p>
	<div class="flex justify-center my-8">
		<img width="200" height="200" src={imgSrc} alt="" />
	</div>
</article>

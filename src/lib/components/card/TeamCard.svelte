<script lang="ts">
	export let title: string = undefined;
	export let href: string = undefined;
	export let src: string = undefined;
	export let description: string = undefined;
</script>

<a {href}>
	<div class="border border-gray-300 p-6 rounded-lg">
		<div
			class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
		>
			<img class="rounded-full" alt="" {src} />
		</div>
		<h2 class="text-lg  font-medium title-font mb-2">{title}</h2>
		{#if description}
			<p class="leading-relaxed text-gray-700 break-words">{description}</p>
		{:else}
			<p class="leading-relaxed text-base">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
		{/if}
	</div>
</a>

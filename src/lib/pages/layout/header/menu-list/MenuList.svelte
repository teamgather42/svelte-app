<script lang="ts">
	type Option = {
		href: string;
		label: string;
	};

	export let heading: string = '';
	export let options: Option[] = null;
</script>

<section>
	<h2 class="border-b text-xl">{heading}</h2>
	<ul>
		{#each options as { label, href }}
			<li class="my-2 hover:bg-red-500"><a class="block py-2" {href}>{label}</a></li>
		{/each}
	</ul>
</section>

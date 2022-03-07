<script lang="ts">
	import { LanguageSelector, CurrencySelector, Fa, Logo } from '$lib/components/';
</script>

<footer class="border-t-2 border-grey-500">
	<section class="flex justify-center py-8">
		<Logo class="font-archivo text-3xl" />
	</section>
	<nav>
		<ul class="flex flex-col items-center">
			<li><a href="/">Terms of Service.</a></li>
			<li><a href="/">Security</a></li>
			<li><a href="/">Privacy Policy</a></li>
			<li><a href="/">Sitemap</a></li>
		</ul>
	</nav>
	<div class="flex flex-col w-full md:flex-row md:justify-between items-center md:pb-5 mt-8">
		<section class="flex justify-around w-300">
			<CurrencySelector />
			<LanguageSelector />
		</section>
		<section class="social-links">
			<ul class="flex justify-between w-full">
				<li class="md:mr-4 lg:mr-10 xl:mr-20">
					<a href="https://twitter.com" target="_blank">
						<Fa icon={['fab', 'twitter']} iconSize="2x" />
					</a>
				</li>
				<li class="md:mr-4 lg:mr-10 xl:mr-20">
					<a href="https://facebook.com" target="_blank">
						<Fa icon={['fab', 'facebook']} iconSize="2x" />
					</a>
				</li>
				<li class="md:mr-4 lg:mr-10 xl:mr-20">
					<a href="https://instagram.com" target="_blank">
						<Fa icon={['fab', 'instagram']} iconSize="2x" />
					</a>
				</li>
				<li>
					<a href="https://linkedin.com" target="_blank">
						<Fa icon={['fab', 'linkedin']} iconSize="2x" />
					</a>
				</li>
			</ul>
		</section>
		<section class="flex items-center w-300">
			<p>© 2021 teamGather. All rights reserved.</p>
		</section>
	</div>
</footer>

<style>
	.w-300 {
		max-width: 300px;
		width: 100%;
	}
	@media (max-width: 768px) {
		.social-links {
			width: 80%;
		}
	}
</style>

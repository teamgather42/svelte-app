<script lang="ts">
	import { scale } from 'svelte/transition';

	/**
	 * Title of the modal.
	 */
	export let title: string = '';
	/**
	 * Additional class for the title.
	 */
	export let titleClass: string = '';
</script>

<div
	in:scale={{ duration: 100, start: 0.95 }}
	out:scale={{ duration: 75, start: 0.95 }}
	class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
>
	<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
		<div class="sm:flex sm:items-start w-full">
			<div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
				<h3 class={`text-lg leading-6 font-medium text-gray-900 ${titleClass}`}>
					{title}
				</h3>
				<div class="mt-2">
					<slot name="modalContent" />
				</div>
			</div>
		</div>
	</div>
</div>

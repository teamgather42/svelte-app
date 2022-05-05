<script lang="ts">
	import { t } from '$lib/i18n';
	import { Fa } from '$lib/components';
	import { onMount, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let menu: HTMLDivElement;
	let showSelect: boolean = false;
	let selectedOption = null;
	let inputFocused: boolean;

	let className: string = '';
	export { className as class };

	export let options;

	$: if (options.length > 0) selectedOption = options[0];

	const selectHandler = (value) => {
		if (!inputFocused) {
			selectedOption = value;
			showSelect = !showSelect;
			dispatch('selectedOption', { value: selectedOption });
		}
	};

	const selectDisplayHandler = () => (showSelect = !showSelect);

	const handleOutsideClick = (event) => {
		if (showSelect && !menu.contains(event.target)) {
			showSelect = false;
		}
	};

	onMount(() => {
		document.addEventListener('click', handleOutsideClick, false);

		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
		};
	});
</script>

<div bind:this={menu} class="relative h-full">
	<button
		on:click={selectDisplayHandler}
		type="button"
		class="relative w-full flex items-center h-full focus:z-20 bg-white border border-gray-300 rounded-md rounded-l-none shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm {className}"
		aria-haspopup="listbox"
		aria-expanded="true"
		aria-labelledby="listbox-label"
	>
		{#if selectedOption?.icon}
			<Fa class="flex items-center" icon={selectedOption.icon} iconSize="sm" />
		{/if}
		<span class="flex items-center">
			<span class="ml-3 block truncate">{$t(selectedOption.label)}</span>
		</span>
		<span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
			<svg
				class="h-5 w-5 text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
	</button>
	<ul
		class:hidden={!showSelect}
		class="transition ease-in duration-100 absolute z-10 w-full bg-white shadow-lg max-h-56 rounded-md mt-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
		tabindex="-1"
		role="listbox"
		aria-labelledby="listbox-label"
		aria-activedescendant="listbox-option-3"
	>
		{#each options as option}
			{#if option.label !== selectedOption.label}
				<li
					class="text-gray-900 cursor-default select-none relative"
					id="listbox-option-0"
					role="option"
				>
					<button
						on:click={() => selectHandler(option)}
						class="flex items-center w-full py-2 pl-3 pr-9 hover:bg-indigo-500 hover:text-white"
					>
						{#if option?.icon}
							<Fa class="flex items-center mr-2" icon={option.icon} iconSize="sm" />
						{/if}
						<span class="font-normal block"> {$t(option.label)} </span>
					</button>
				</li>
			{/if}
		{/each}
	</ul>
</div>

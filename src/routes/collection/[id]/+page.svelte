<script>
	import { goto } from '$app/navigation';
	export let data;

	$: ({ verse } = data);
	$: passage = verse?.passage.replace(' (ESV)', '');

	let hidden = false;

	const toggleHidden = () => {
		hidden = !hidden;
	};
</script>

<div class="w-[50%] flex flex-col items-center gap-6">
	<div>
		{#if verse}
			<h2 class="mb-6 text-lg text-center md:text-xl text-secondary">{verse.ref}</h2>
			<div class="max-h-[350px] overflow-scroll">
				<p
					class="tracking-wide text-center transition duration-700 ease-in-out md:text-lg text-md opacity-90"
					class:blur-sm={hidden}
				>
					{passage}
				</p>
			</div>
		{:else}
			<p class="mb-12 text-lg tracking-wider text-warning font-extralight">No verse found</p>
		{/if}
	</div>
	<div class="flex flex-col items-center w-full md:flex-row md:gap-6 md:justify-center">
		<button
			class="mt-8 btn btn-outline btn-secondary rounded-xl lg:w-[20%] md:w-[40%] w-[60%] hover:scale-105"
			on:click={() => goto('/collection')}>Back</button
		>
		<button
			class="mt-8 btn btn-outline btn-secondary rounded-xl lg:w-[20%] md:w-[40%] w-[60%] hover:scale-105"
			on:click={toggleHidden}>{hidden ? 'Show' : 'Hide'}</button
		>
	</div>
</div>

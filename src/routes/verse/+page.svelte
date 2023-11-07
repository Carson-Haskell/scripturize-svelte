<script>
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { verse } from '$lib/stores/verseStore.js';
	import Modal from '$lib/components/Modal.svelte';

	const { ref, passage } = $verse;

	const handleSubmit = async () => {
		await axios.post('/api/verses', { ref, passage });
		goto('/collection');
	};
</script>

<div class="w-[50%] text-center flex flex-col items-center gap-6">
	<div>
		{#if $verse}
			<h2 class="mb-6 text-lg md:text-xl text-secondary">{ref}</h2>
			<div class="max-h-[350px] overflow-scroll">
				<p class="tracking-wide md:text-lg text-md opacity-90">{passage}</p>
			</div>
		{:else}
			<p class="mb-12 text-lg tracking-wider text-warning font-extralight">No verse found</p>
		{/if}
	</div>
	<div class="flex flex-col items-center w-full md:flex-row md:gap-6 md:justify-center">
		<button
			class="mt-8 btn btn-outline btn-secondary rounded-xl lg:w-[20%] md:w-[40%] w-[60%] hover:scale-105"
			on:click={() => goto('/')}>Back</button
		>
		<Modal {handleSubmit} />
	</div>
</div>

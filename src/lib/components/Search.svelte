<script>
	import Toast from '$lib/components/Toast.svelte';
	import { goto } from '$app/navigation';
	import axios from 'axios';

	import { verse } from '$lib/stores/verseStore.js';

	let query = '';
	let error = false;

	const handleSearch = async () => {
		if (!query) {
			error = true;
			setTimeout(() => {
				error = false;
			}, 4000);

			return;
		}

		const newVerse = await axios.post('/api/esv', { query });

		verse.set(newVerse.data);

		query = '';
		goto('/verse');
	};
</script>

<form
	class="flex gap-4 md:w-full w-[80%] justify-center mt-8"
	on:submit|preventDefault={handleSearch}
>
	<input
		type="text"
		placeholder="John 1:1-3..."
		class="w-full max-w-xs input input-bordered border-secondary rounded-xl"
		class:border-error={error}
		class:border-secondary={!error}
		bind:value={query}
	/>
	<button class="btn btn-secondary rounded-xl hover:scale-105">Search</button>
</form>

{#if error}
	<Toast type="error" />
{/if}

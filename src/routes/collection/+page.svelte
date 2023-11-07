<script>
	import { goto } from '$app/navigation';
	import { user } from '$lib/user.js';
	import VerseCard from '$lib/components/VerseCard.svelte';

	export let data;

	$: ({ verses } = data);

	user.set(data.user || null);
</script>

{#if !$user}
	<div class="flex flex-col items-center justify-center gap-4">
		<h1 class="text-2xl font-bold tracking-widest uppercase md:text-4xl text-primary/70">
			You are not logged in
		</h1>
		<p class="text-sm text-accent/70 sm:text-lg">Please login to view or create your collection</p>
		<button
			on:click={() => goto('/login')}
			class="mt-2 btn btn-outline btn-secondary rounded-xl hover:scale-105">Login</button
		>
	</div>
{:else if verses.length}
	<div class="flex flex-col items-center justify-center">
		<h1 class="mt-4 mb-4 text-4xl font-bold tracking-widest uppercase text-primary/70">
			Verse Collection
		</h1>
		<p class="text-accent/80">Begin memorizing your verses now</p>
	</div>

	<div class="flex flex-wrap justify-center w-full gap-8 m-12 max-h-[80%] mb-20">
		{#each verses as verse (verse.id)}
			<VerseCard {verse} />
		{/each}
	</div>
	<button on:click={() => goto('/')} class="mb-16 btn btn-secondary rounded-xl hover:scale-105"
		>Add Verse</button
	>
{:else}
	<div class="flex flex-col items-center justify-center gap-4 text-center">
		<h2 class="text-xl">You don't have any verses in your collection!</h2>
		<p class="text-lg text-accent/90">Add your first verse now</p>
		<button on:click={() => goto('/')} class="mt-2 btn btn-outline rounded-xl hover:scale-105"
			>Add Verse</button
		>
	</div>
{/if}

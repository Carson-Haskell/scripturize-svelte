<script>
	import '../app.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navigation />
	</svelte:fragment>

	{#key $page.url}
		<div
			class="flex flex-col items-center justify-center w-full h-full gap-6"
			in:fly={{ duration: 600 }}
		>
			<slot />
		</div>
	{/key}
</AppShell>

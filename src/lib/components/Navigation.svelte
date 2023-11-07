<script>
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { user } from '$lib/user.js';
</script>

<div class="flex items-center justify-between py-4">
	<div class="pl-8">
		<h1 class="tracking-widest uppercase text-md md:text-xl text-primary">Scripturize</h1>
	</div>
	<div class="flex justify-center gap-4 pr-8 tracking-wider md:gap-6 text-primary">
		<a href="/" class="transition duration-300 hover:text-secondary-focus hover:scale-105">Home</a>
		<a href="/collection" class="transition duration-300 hover:text-secondary-focus hover:scale-105"
			>Collection</a
		>
		{#if !$user}
			<a href="/login" class="transition duration-300 hover:text-secondary-focus hover:scale-105"
				>Login</a
			>
		{:else}
			<a href="/logout" class="transition duration-300 hover:text-secondary-focus hover:scale-105"
				>Logout</a
			>
		{/if}
		<ThemeToggle />
	</div>
</div>

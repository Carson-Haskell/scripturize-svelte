<script>
	import Home from '$lib/components/Home.svelte';
	import { user } from '$lib/user.js';
	export let data;

	user.set(data.user || null);
</script>

<Home />

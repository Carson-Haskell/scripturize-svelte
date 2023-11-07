<script>
	import { fly } from 'svelte/transition';

	export let type;
</script>

<div class="toast" in:fly={{ x: '100%', duration: 400 }} out:fly={{ x: '100%', duration: 300 }}>
	<div
		class="alert alert-error rounded-xl"
		class:alert-error={type === 'error'}
		class:alert-success={type === 'success'}
	>
		<span class="font-medium text-neutral">Please provide verse reference</span>
	</div>
</div>

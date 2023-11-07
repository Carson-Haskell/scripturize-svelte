<script>
	import { goto } from '$app/navigation';
	import ToggleConfetti from '$lib/components/ToggleConfetti.svelte';
	import { Confetti } from 'svelte-confetti';
	import axios from 'axios';
	export let verse;

	let memorized = verse.memorized;

	const handleToggle = async () => {
		memorized = !memorized;
		const updatedVerse = await axios.patch(`/api/verses/${verse.id}`, {
			memorized: !verse.memorized
		});

		verse = updatedVerse.data;
	};
</script>

<div class="shadow-2xl card w-96 h-72 bg-primary-content/20 rounded-2xl">
	<div class="card-body">
		<div class="flex items-center justify-between mb-1">
			<h2 class="tracking-wider card-title text-accent/70">{verse.ref}</h2>

			<div class="tooltip tooltip-success" data-tip="Memorized verse?">
				<ToggleConfetti>
					<input
						type="checkbox"
						class="toggle toggle-success"
						checked={verse.memorized}
						on:click={handleToggle}
						slot="label"
					/>
					{#if memorized}
						<Confetti y={[0.35, 1.15]} />
					{/if}
				</ToggleConfetti>
			</div>
		</div>
		<p class="max-h-[125px] mb-2 overflow-hidden opacity-80">{verse.passage}</p>
		<div class="justify-end card-actions">
			<button
				on:click={() => goto(`collection/${verse.id}`)}
				class="btn btn-outline btn-secondary rounded-xl hover:scale-105">Memorize</button
			>
		</div>
	</div>
</div>

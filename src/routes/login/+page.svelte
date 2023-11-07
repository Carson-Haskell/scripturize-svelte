<script>
	import LoginForm from '$lib/components/LoginForm.svelte';
</script>

<div class="hero">
	<div class="flex-col hero-content lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold text-primary">Welcome back,</h1>
			<p class="py-6">
				Login to view your personal <span class="text-primary">Scripturize</span> collection where you
				can work on committing verses to memory, or add new verses to expand your collection!
			</p>
			<p class="py-6 italic text-primary/70">
				"Your word is a lamp unto my feet and a light unto my path."
			</p>
			<p class="lg:ml-6 text-primary/70">- Psalm 119:105</p>
		</div>
		<div
			class="flex-shrink-0 w-full max-w-sm p-8 shadow-2xl md:mr-10 card bg-primary-content/20 rounded-2xl"
		>
			<LoginForm />
		</div>
	</div>
</div>

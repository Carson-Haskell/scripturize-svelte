<script>
	export let handleSubmit = () => {};
</script>

<button
	class="mt-8 btn btn-outline btn-secondary rounded-xl lg:w-[20%] md:w-[40%] w-[60%] hover:scale-105"
	onclick="my_modal_1.showModal()">Add Verse</button
>
<dialog id="my_modal_1" class="modal">
	<div class="modal-box h-[40%] flex flex-col items-center justify-center gap-6">
		<h3 class="text-lg font-bold">Memorize this verse?</h3>
		<p class="">
			This will add the selected verse to your personal <span class="text-primary">Scripturize</span
			> collection where you can work to commit it to memory.
		</p>
		<div class="flex justify-center modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<div class="flex justify-center gap-8">
					<button class="btn btn-outline btn-error rounded-xl w-[60%] font-bold hover:scale-105"
						>No</button
					>
					<button
						class="btn btn-outline btn-success rounded-xl w-[60%] font-bold hover:scale-105"
						on:click={handleSubmit}>Yes</button
					>
				</div>
			</form>
		</div>
	</div>
</dialog>

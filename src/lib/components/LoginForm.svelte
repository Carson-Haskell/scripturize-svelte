<script>
	import { enhance } from '$app/forms';
	let error = false;
</script>

<form class="card-body" method="POST" action="?/login" use:enhance>
	<div class="form-control">
		<label class="label" for="email">
			<span class="label-text">Email</span>
		</label>
		<input
			id="email"
			type="email"
			name="email"
			placeholder="email"
			class="input input-bordered rounded-xl"
			class:border-error={error}
			required
		/>
	</div>
	<div class="form-control">
		<label class="label" for="password">
			<span class="label-text">Password</span>
		</label>
		<input
			type="password"
			id="password"
			name="password"
			placeholder="password"
			class="input input-bordered rounded-xl"
			class:border-error={error}
			required
		/>
	</div>
	<div class="mt-6 form-control">
		<button class="btn btn-secondary rounded-xl hover:scale-105" type="submit">Login</button>
	</div>

	<div class="divider">OR</div>
	<button class="btn btn-secondary rounded-xl hover:scale-105" formaction="?/register"
		>Register</button
	>
</form>

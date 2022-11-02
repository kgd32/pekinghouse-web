<script>
	import { loading } from '$lib/stores/loading';
	import { onDestroy, onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		duration: 3500,
		easing: cubicOut
	});

	const unsub = loading.subscribe((state) => {
		if (!state) {
			progress.set(1, { duration: 1000 });
		}
	});
	onMount(() => {
		progress.set(0.7);
	});

	onDestroy(() => {
		unsub();
	});
</script>

<div class="progress-bar">
	<div class="progress-sliver" style={`--width: ${$progress * 100}%`} />
</div>

<style>
	.progress-bar {
		position: fixed;
		top: 64px;
		left: 0;
		right: 0;
		height: 0.2rem;
	}
	.progress-sliver {
		width: var(--width);
		background-color: #f8485e;
		height: 100%;
	}
</style>

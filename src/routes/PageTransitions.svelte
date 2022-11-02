<script>
	import { fly, fade } from 'svelte/transition';
	export let refresh = '';
</script>

<div class="w-full h-full">
	{#key refresh}
		<div
			class="w-full"
			in:fade={{ duration: 700, delay: 500 }}
			out:fade={{ duration: 700, delay: 500 }}
		>
			<slot />
		</div>
	{/key}
</div>

<style>
	.transition-outer {
		display: grid;
		grid-template: 1fr 1fr;
	}
	.transition-inner {
		grid-row: 1;
		grid-column: 1;
	}
</style>

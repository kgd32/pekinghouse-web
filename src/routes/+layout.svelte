<script>
	import '../app.css';
	import { navigating } from '$app/stores';
	import { loading } from '$lib/stores/loading';
	import Loading from './Loading.svelte';
	import { fly, fade, slide } from 'svelte/transition';

	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	$: $loading = !!$navigating;
</script>

<div class="w-screen">
	<Navbar />
	<main class="w-full mx-auto ">
		<slot />
	</main>
	<Footer />

	{#if $loading === true}
		<div out:fade={{ delay: 700 }}>
			<Loading />
		</div>
	{/if}
</div>

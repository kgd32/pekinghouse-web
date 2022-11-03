<script>
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import { fly, fade, slide } from 'svelte/transition';

	let showMobileNav = false;

	function toggleNavbar() {
		showMobileNav = !showMobileNav;
	}

	onMount(() => {
		showMobileNav = false;
	});

	onDestroy(() => {
		showMobileNav = false;
	});
</script>

<header class="sticky top-0 z-50 h-16 w-full bg-black">
	<div class="container mx-auto flex h-full items-center justify-between px-4 md:px-0">
		<a class="font-lemonmilkbold text-xl text-white" href="/">PEKING HOUSE</a>

		<ul
			id="menu"
			class="hidden bg-black
                font-lemonmilk md:relative md:flex md:flex-row md:space-x-6 md:bg-transparent md:p-0"
		>
			<li class="fixed top-4 right-6 md:hidden">
				<button class="text-right text-4xl text-white" on:click={toggleNavbar}>&times;</button>
			</li>

			<li>
				<a href="/" class="text-white opacity-70 duration-300 hover:opacity-100">Home</a>
			</li>
			<li>
				<a href="/releases" class="text-white opacity-70 duration-300 hover:opacity-100  "
					>Releases</a
				>
			</li>
			<li>
				<a href="/artists" class="text-white opacity-70 duration-300 hover:opacity-100">Artists</a>
			</li>

			<li>
				<a href="/events" class="text-white opacity-70 duration-300 hover:opacity-100">Events</a>
			</li>
			<li>
				<a href="/contact" class="text-white opacity-70 duration-300 hover:opacity-100">Contact</a>
			</li>
		</ul>

		<div class="flex items-center md:hidden">
			<button
				class="text-4xl font-bold text-white opacity-70 duration-300 hover:opacity-100"
				on:click={toggleNavbar}
			>
				&#9776;
			</button>
		</div>

		{#if showMobileNav}
			<ul
				id="menu"
				class="{showMobileNav
					? 'w-full h-screen'
					: 'hidden'} fixed top-0 right-0 z-50 bg-black px-10 py-16
                font-lemonmilkbold"
				in:slide={{ duration: 800, delay: 200 }}
				out:fade
			>
				<li class="z-90 fixed top-4 right-6 md:hidden">
					<button class="text-right text-4xl text-white" on:click={toggleNavbar}>&times;</button>
				</li>

				<li class="mb-6">
					<a href="/" class="text-5xl text-white " on:click={toggleNavbar}>Home</a>
				</li>
				<li class="mb-6">
					<a href="/releases" class="text-5xl text-white" on:click={toggleNavbar}>Releases</a>
				</li>
				<li class="mb-6">
					<a href="/artists" class="text-5xl text-white" on:click={toggleNavbar}>Artists</a>
				</li>

				<li class="mb-6">
					<a href="/events" class="text-5xl text-white" on:click={toggleNavbar}>Events</a>
				</li>
				<li class="mb-6">
					<a href="/contact" class="text-5xl text-white" on:click={toggleNavbar}>Contact</a>
				</li>
			</ul>
		{/if}
	</div>
</header>

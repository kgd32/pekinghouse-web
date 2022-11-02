<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import BlurhashImage from '$lib/blurhash/BlurhashImage.svelte';

	export let data;
</script>

<MetaTags title="Artists" description="Peking House artists" />

<div>
	<h2 class="text-4xl font-lemonmilk mb-4" in:fly={{ y: 20, duration: 800 }}>Artists</h2>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{#each data.artists.items as artist, index (index)}
		<a href="/artists/{artist.fields.name}">
			<div
				class="flex flex-col p-8 md:p-8 lg:p-6 -z-10"
				in:fly={{ y: 100, delay: 450 + index * 250, duration: 1400 }}
			>
				<div
					class="flex justify-center sm:justify-center lg:justify-end md:justify-end mb-2 md:mb-1 lg:mb-1"
				>
					<span
						class="text-4xl md:text-3xl lg:text-2xl tracking-wide md:tracking-wide lg:tracking-wide font-lemonmilkbold"
						>{artist.fields.name}</span
					>
				</div>
				<img src={artist.fields?.image?.fields?.file?.url} width="600" height="600" />
			</div>
		</a>
	{/each}
</div>

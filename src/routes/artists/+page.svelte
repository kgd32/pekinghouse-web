<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data;
</script>

<MetaTags title="Artists" description="Peking House artists" />

<div>
	<h2 class="mb-4 ml-4 font-lemonmilk  text-4xl" in:fly={{ y: 20, duration: 800 }}>Artists</h2>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{#each data.artists.items as artist, index (index)}
		<a href="/artists/{artist.fields.name}">
			<div
				class="-z-10 flex flex-col p-8 md:p-8 lg:p-6"
				in:fly={{ y: 100, delay: 450 + index * 250, duration: 1400 }}
			>
				<div
					class="mb-2 flex justify-center sm:justify-center md:mb-1 md:justify-end lg:mb-1 lg:justify-end"
				>
					<span
						class="font-lemonmilkbold text-4xl tracking-wide md:text-3xl md:tracking-wide lg:text-2xl lg:tracking-wide"
						>{artist.fields.name}</span
					>
				</div>
				<img src="https:{artist.fields?.image?.fields?.file?.url}" width="600" height="600" />
			</div>
		</a>
	{/each}
</div>

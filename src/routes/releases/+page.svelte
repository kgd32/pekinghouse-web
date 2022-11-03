<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data;
</script>

<MetaTags title="Releases - Peking House" description="Peking House releases" />

<div>
	<h2 class="mb-4 ml-4 font-lemonmilk  text-4xl" in:fly={{ y: 20, duration: 800 }}>Releases</h2>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{#each data.releases.items as release, index (index)}
		<a href="/releases/{release.fields.catnr}">
			<div
				class="-z-10 flex flex-col p-8 md:p-8 lg:p-6"
				in:fly={{ y: 100, delay: 450 + index * 250, duration: 1400 }}
			>
				<div class="mb-1 flex justify-end ">
					<span class="font-lemonmilk text-base lg:tracking-wide">{release.fields.catnr}</span>
				</div>
				<img src="https:{release.fields?.cover?.fields?.file?.url}" width="600" height="600" />
				<div class="mb-2 flex justify-center  lg:mb-1 ">
					<span
						class="font-lemonmilkmedium text-4xl tracking-wide md:text-3xl md:tracking-wide lg:text-2xl lg:tracking-wide"
						>{release.fields.name}</span
					>
				</div>
			</div>
		</a>
	{/each}
</div>

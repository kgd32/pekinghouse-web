<script>
	import { fly, fade } from 'svelte/transition';

	export let data;
</script>

<div>
	<h2 class="mb-4 font-lemonmilk text-4xl" in:fly={{ y: 20, duration: 800 }}>Releases</h2>
</div>
<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each data.releases.items as release, index (index)}
		<div
			class="flex flex-col p-12 md:p-8 lg:p-6"
			in:fly={{ y: 50, delay: 450 + index * 250, duration: 1200 }}
		>
			<div class="mb-2 flex justify-center md:mb-1 md:justify-start lg:mb-1 lg:justify-start">
				<span class="text-md font-lemonmilkmedium tracking-wide">{release.fields.catnr}</span>
			</div>
			<div>
				<a href="/releases/{release.fields.catnr}">
					<img src="https:{release.fields?.cover?.fields?.file?.url}" alt={release.fields.name} />
				</a>
			</div>
			<div class="mb-2 flex justify-center md:mb-1 md:justify-center lg:mb-1">
				<span
					class="font-lemonmilkbold text-4xl tracking-widest md:text-3xl md:tracking-wide lg:text-2xl lg:tracking-wide"
					>{release.fields.name}</span
				>
			</div>
		</div>
	{/each}
</div>

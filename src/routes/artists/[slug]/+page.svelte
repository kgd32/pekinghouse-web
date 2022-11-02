<script>
	import { bounceIn } from 'svelte/easing';
	import { fly, fade } from 'svelte/transition';

	export let data;
</script>

<div class="px-8">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="order-last md:order-first" in:fade={{ delay: 1000, duration: 2000 }}>
			<img src={data.artist?.image?.fields?.file?.url} alt={data.artist.name} />
		</div>
		<div in:fly={{ y: 50, delay: 1200, duration: 2000 }}>
			<h1 class="text-3xl font-lemonmilk mb-2">{data.artist.name}</h1>
			<p class="text-base font-lemonmilk text-gray-700" style="white-space: pre-line">
				{data.artist.bio}
			</p>
		</div>
	</div>
	{#if data.releases}
		<div class="mt-8">
			<div>
				<h2 class="text-2xl font-lemonmilk mb-8" in:fly={{ y: 20, delay: 1100, duration: 2000 }}>
					Releases
				</h2>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start ">
				{#each data.releases as release, index (index)}
					<a href="/releases/{release.fields.catnr}">
						<div in:fly={{ y: 200, delay: 1500 + index * 250, duration: 2000 }}>
							<img
								src={release.fields.cover?.fields?.file?.url}
								height="300"
								widht="300"
								alt={release.fields.name}
							/>
							<span class="font-lemonmilk">{release.fields.name}</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>

<script>
	import { onMount, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { MetaTags } from 'svelte-meta-tags';
	import Audioplayer from '$lib/components/Audioplayer.svelte';
	export let data;
</script>

<MetaTags
	title="{data.release.name} - Peking House"
	description="{data.release.name} on Peking House"
/>

<div class="w-full bg-white">
	<div class="flex flex-col items-center justify-center">
		<div class="p-8" in:fly={{ y: 100, delay: 450, duration: 1400 }} out:fade>
			<div>
				<h2 class="font-lemonmilk text-base uppercase tracking-wide text-gray-500">
					{data.release.catnr}
				</h2>
				<h3 class="mt-2 py-2 font-lemonmilk text-xl leading-8 text-black">
					{data.release.name}
				</h3>
			</div>
			<div>
				<div>
					<img
						src="https:{data.release.cover?.fields?.file?.url}"
						alt={data.release.name}
						width="600"
						height="600"
					/>
				</div>
				{#if data.release.tracks}
					{#each data.release.tracks as audio}
						<div>
							<Audioplayer audiourl={audio.url} />
							<span class="mt-2 ml-12 font-lemonmilk text-lg">{audio.name}</span>
						</div>
					{/each}
				{/if}
				<div class="mt-4 flex justify-center">
					<a href={data.release.traxsourceurl}>
						<button
							class="rounded-full bg-green-500 py-2 px-4 font-lemonmilk text-sm text-white hover:bg-green-700"
							>Buy at Traxsource</button
						>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

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

<div class="bg-white">
	<div class="flex flex-col items-center justify-center">
		<div class="p-8" in:fly={{ y: 100, delay: 450, duration: 1400 }} out:fade>
			<div>
				<h2 class="text-base text-gray-500 font-lemonmilk tracking-wide uppercase">
					{data.release.catnr}
				</h2>
				<h3 class="mt-2 text-3xl leading-8 text-black py-2 sm:text-4xl font-lemonmilk">
					{data.release.name}
				</h3>
			</div>
			<div>
				<div>
					<img
						src={data.release.cover?.fields?.file?.url}
						alt={data.release.name}
						width="600"
						height="600"
					/>
				</div>
				{#if data.release.tracks}
					{#each data.release.tracks as audio}
						<div>
							<Audioplayer audiourl={audio.url} />
							<span class="text-lg font-lemonmilk mt-2 ml-12">{audio.name}</span>
						</div>
					{/each}
				{/if}
				<div class="flex justify-center mt-4">
					<a href={data.release.traxsourceurl}>
						<button
							class="bg-green-500 hover:bg-green-700 text-white text-sm font-lemonmilk py-2 px-4 rounded-full"
							>Buy at Traxsource</button
						>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

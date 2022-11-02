<script>
	import { onMount, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import Audioplayer from '$lib/components/Audioplayer.svelte';
	export let data;
</script>

<div class="bg-white">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
			<div>
				<h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
					{data.release.catnr}
				</h2>
				<h3
					class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 py-2 sm:text-4xl font-lemonmilk"
				>
					{data.release.name}
				</h3>
			</div>
		</div>
		<div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
			<div
				class="relative lg:row-start-1 lg:col-start-2 p-8"
				in:fly={{ y: 100, delay: 450, duration: 1400 }}
				out:fade
			>
				<div class="relative text-base mx-auto max-w-prose lg:max-w-none  ">
					<figure class="">
						<div class="aspect-w-12 aspect-h-7 lg:aspect-none">
							<img
								src={data.release.cover?.fields?.file?.url}
								alt={data.release.name}
								width="600"
								height="600"
							/>
						</div>
					</figure>
					{#if data.release.tracks}
						{#each data.release.tracks as audio}
							<div>
								<Audioplayer audiourl={audio.url} />
								<span class="text-lg font-lemonmilk mt-2 ml-12">{audio.name}</span>
							</div>
						{/each}
					{/if}
				</div>
			</div>
			<div class="mt-8 lg:mt-0 p-4">
				<div
					class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 "
				>
					Tjohej
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	export let data;

	let imageslider;
	$: slider = imageslider;

	function moveRight() {
		const max = slider.scrollWidth - slider.clientWidth;
		const left = slider.clientWidth;

		if (max === slider.scrollLeft) {
			slider.scrollTo({ left: 0, behavior: 'smooth' });
		} else {
			slider.scrollBy({ left, behavior: 'smooth' });
		}
	}

	function moveLeft() {
		const max = slider.scrollWidth - slider.clientWidth;
		const left = slider.clientWidth;
		const right = -slider.clientWidth;

		if (max === slider.scrollLeft) {
			slider.scrollTo({ left: 0, behavior: 'smooth' });
		} else {
			slider.scrollBy({ left: right, behavior: 'smooth' });
		}
	}
	function moveSlide() {
		const max = slider.scrollWidth - slider.clientWidth;
		const left = slider.clientWidth;

		if (max === slider.scrollLeft) {
			slider.scrollTo({ left: 0, behavior: 'smooth' });
		} else {
			slider.scrollBy({ left: left, behavior: 'smooth' });
		}
	}

	onMount(async () => {
		setInterval(moveSlide, 6000);
	});
</script>

<MetaTags title="Peking House" description="Peking House" />
<div class="mx-auto w-full">
	<section class="relative bg-ph-blue-50">
		<div class="hero absolute -z-0  h-2/3 w-full bg-white px-8" />

		<div
			class="rotate-img flex h-2/3 w-full snap-x snap-mandatory flex-nowrap overflow-x-auto pb-8 text-center md:overflow-hidden"
			bind:this={imageslider}
		>
			{#each data.releases.items as release}
				<div
					class="z-40 flex w-full flex-none flex-col items-center space-y-4 bg-transparent py-16 text-white"
				>
					<h2 class="text-focus-in max-w-md font-lemonmilkmedium text-3xl text-black">
						{release.fields.name}
					</h2>
					<a href="/releases/{release.fields.catnr}">
						<img
							class="z-50 snap-center shadow-2xl"
							src="https:{release.fields?.cover?.fields?.file?.url}"
							alt={release.fields.name}
							height="600px"
							width="600px"
						/>
					</a>
				</div>
			{/each}
		</div>
		<div class="flex justify-center">
			<button on:click={moveLeft} class="mr-4" id="slideImageLeft" aria-label="slide image left">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					class="bi bi-chevron-left transform fill-gray-400 transition duration-500 hover:scale-150 hover:fill-black"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
					/>
				</svg>
			</button>
			<button on:click={moveRight} class="ml-4" id="slideImageRight" aria-label="slide image right">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					class="bi bi-chevron-right transform fill-gray-400 transition duration-500 hover:scale-150 hover:fill-black"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
					/>
				</svg>
			</button>
		</div>
	</section>

	<section class="h-fit bg-ph-blue-50 p-8 md:p-16">
		<div class="mx-auto max-w-6xl md:px-8">
			<div>
				<h2 class="mb-4 font-lemonmilk text-2xl">Latest Releases</h2>
			</div>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 ">
				{#each data.releases.items as release, index (index)}
					<div
						class="flex transform flex-col transition duration-500 hover:scale-105"
						in:fly={{ y: 50, delay: 150 + index * 250, duration: 700 }}
					>
						<div>
							<a href="/releases/{release.fields.catnr}">
								<img
									src="https:{release.fields?.cover?.fields?.file?.url}"
									alt={release.fields.name}
									height="600px"
									width="600px"
								/>
							</a>
						</div>
						<div class="mb-2 flex justify-start md:mb-1 lg:mb-1">
							<span class="font-lemonmilk text-base">{release.fields.name}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.hero {
		clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
	}

	.rotate-img {
		transform: perspective(400px) rotateY(2deg);
		transition: transform 0.4s ease-out;
	}
	.rotate-img:hover {
		transform: perspective(400px) rotateY(5deg);
		transition: transform 0.4s ease-out;
	}
</style>

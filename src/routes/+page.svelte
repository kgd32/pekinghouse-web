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

	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX / 100;
		m.y = event.clientY;
	}

	let coverimages = [1, 2, 3, 4, 5];
</script>

<MetaTags title="Peking House" description="Peking House" />
<div class="w-full mx-auto">
	<section class="relative bg-ph-blue-50">
		<div class="absolute w-full h-2/3  bg-white -z-0 hero px-8" />

		<div
			class="h-2/3 w-full snap-mandatory snap-x overflow-x-auto md:overflow-hidden flex flex-nowrap text-center rotate-img pb-8"
			bind:this={imageslider}
		>
			{#each data.releases.items as release}
				<div
					class="bg-transparent text-white space-y-4 flex-none w-full flex flex-col items-center py-16 z-40"
				>
					<h2 class="text-3xl text-black max-w-md font-lemonmilkmedium text-focus-in">
						{release.fields.name}
					</h2>
					<a href="/releases/{release.fields.catnr}">
						<img
							class="z-50 snap-center shadow-2xl"
							src={release.fields?.cover?.fields?.file?.url}
							alt={release.fields.name}
							height="600"
							width="600"
						/>
					</a>
				</div>
			{/each}
		</div>
	</section>

	<section class="h-fit bg-ph-blue-50 p-8 md:p-16">
		<div class="md:px-8 mx-auto max-w-6xl">
			<div>
				<h2 class="text-2xl font-lemonmilk mb-4">Latest Releases</h2>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
				{#each data.releases.items as release, index (index)}
					<div class="flex flex-col" in:fly={{ y: 50, delay: 150 + index * 250, duration: 700 }}>
						<div>
							<a href="/releases/{release.fields.catnr}">
								<img
									src={release.fields?.cover?.fields?.file?.url}
									alt={release.fields.name}
									height="600"
									width="600"
								/>
							</a>
						</div>
						<div class="flex justify-start mb-2 md:mb-1 lg:mb-1">
							<span class="text-base font-lemonmilk">{release.fields.name}</span>
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

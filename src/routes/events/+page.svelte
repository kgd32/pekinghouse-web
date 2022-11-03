<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { fly, fade } from 'svelte/transition';

	export let data;
	let month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<MetaTags title="Events" description="Peking House Events" />

<div class="p-4">
	<div class="mb-4">
		<h2 class="font-lemonmilk text-2xl">Upcoming Events</h2>
	</div>
	{#if data.events.items.length < 1}
		<p class="font-lemonmilk text-base">No upcoming events...</p>
	{/if}
	{#each data.events.items as release, index (index)}
		{@const eventdate = new Date(release.fields.date)}
		<div
			class="mb-8 flex flex-col items-center rounded bg-white p-2 shadow-lg md:flex-row"
			in:fly={{ y: 50, delay: 250 + index * 250, duration: 1200 }}
		>
			<div>
				<img
					src="https:{release.fields?.cover?.fields?.file?.url}"
					alt={release.fields.name}
					height="250"
					width="250"
					class="w-full md:w-96"
				/>
			</div>
			<div class="mt-4 w-full md:ml-4">
				<div class="flex-1">
					<div class="flex w-full justify-between">
						<div class="mb-4">
							<span class="font-lemonmilk text-base"
								>{month[eventdate.getMonth()]} {eventdate.getDate()} - {eventdate.getFullYear()}
							</span>
						</div>
						<div>
							<button
								class="rounded bg-black p-2 font-lemonmilk text-sm text-white hover:bg-gray-700"
								>Buy tickets</button
							>
						</div>
					</div>
					<div class="mb-4">
						<span class="font-lemonmilk text-xl"
							>{release.fields.name} / {release.fields.venue}</span
						>
					</div>
				</div>
				<div>
					<h3 class="font-lemonmilk text-lg">Lineup:</h3>
					<ul class="font-lemonmilk text-sm">
						{#each release.fields.lineup as artist}
							<li>{artist}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="mt-8 p-4">
	<div class="mb-4">
		<h2 class="font-lemonmilk text-2xl">Past Events</h2>
	</div>
	{#each data.pastevents.items as release, index (index)}
		{@const eventdate = new Date(release.fields.date)}
		<div
			class="mb-8 flex flex-col items-center rounded bg-white p-2 md:flex-row"
			in:fly={{ y: 50, delay: 250 + index * 250, duration: 1200 }}
		>
			<div>
				<img
					src="https:{release.fields?.cover?.fields?.file?.url}"
					alt={release.fields.name}
					height="250"
					width="250"
					class="w-full md:w-96"
				/>
			</div>
			<div class="mt-4 w-full md:ml-4">
				<div class="flex-1">
					<div class="flex w-full justify-between">
						<div class="mb-4">
							<span class="font-lemonmilk text-base"
								>{month[eventdate.getMonth()]} {eventdate.getDate()} - {eventdate.getFullYear()}
							</span>
						</div>
					</div>
					<div class="mb-4">
						<span class="font-lemonmilk text-xl"
							>{release.fields.name} / {release.fields.venue}</span
						>
					</div>
				</div>
				<div>
					<h3 class="font-lemonmilk text-lg">Lineup:</h3>
					<ul class="font-lemonmilk text-sm">
						{#each release.fields.lineup as artist}
							<li>{artist}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	{/each}
</div>

<script>
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

<div class="p-4">
	<div class="mb-4">
		<h2 class="text-2xl font-lemonmilk">Upcoming Events</h2>
	</div>
	{#if data.events.items.length < 1}
		<p class="text-base font-lemonmilk">No upcoming events...</p>
	{/if}
	{#each data.events.items as release, index (index)}
		{@const eventdate = new Date(release.fields.date)}
		<div
			class="flex flex-col items-center md:flex-row mb-8 shadow-lg bg-white p-2 rounded"
			in:fly={{ y: 50, delay: 250 + index * 250, duration: 1200 }}
		>
			<div>
				<a href="/releases/{release.fields.catnr}">
					<img
						src={release.fields?.cover?.fields?.file?.url}
						alt={release.fields.name}
						height="250"
						width="250"
						class="w-full md:w-96"
					/>
				</a>
			</div>
			<div class="md:ml-4 w-full mt-4">
				<div class="flex-1">
					<div class="flex justify-between w-full">
						<div class="mb-4">
							<span class="text-base font-lemonmilk"
								>{month[eventdate.getMonth()]} {eventdate.getDate()} - {eventdate.getFullYear()}
							</span>
						</div>
						<div>
							<button
								class="text-sm font-lemonmilk p-2 bg-black text-white rounded hover:bg-gray-700"
								>Buy tickets</button
							>
						</div>
					</div>
					<div class="mb-4">
						<span class="text-xl font-lemonmilk"
							>{release.fields.name} / {release.fields.venue}</span
						>
					</div>
				</div>
				<div>
					<h3 class="text-lg font-lemonmilk">Lineup:</h3>
					<ul class="text-sm font-lemonmilk">
						{#each release.fields.lineup as artist}
							<li>{artist}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="p-4 mt-8">
	<div class="mb-4">
		<h2 class="text-2xl font-lemonmilk">Past Events</h2>
	</div>
	{#each data.pastevents.items as release, index (index)}
		{@const eventdate = new Date(release.fields.date)}
		<div
			class="flex flex-col items-center md:flex-row mb-8 bg-white p-2 rounded"
			in:fly={{ y: 50, delay: 250 + index * 250, duration: 1200 }}
		>
			<div>
				<a href="/releases/{release.fields.catnr}">
					<img
						src={release.fields?.cover?.fields?.file?.url}
						alt={release.fields.name}
						height="250"
						width="250"
						class="w-full md:w-96"
					/>
				</a>
			</div>
			<div class="md:ml-4 w-full mt-4">
				<div class="flex-1">
					<div class="flex justify-between w-full">
						<div class="mb-4">
							<span class="text-base font-lemonmilk"
								>{month[eventdate.getMonth()]} {eventdate.getDate()} - {eventdate.getFullYear()}
							</span>
						</div>
					</div>
					<div class="mb-4">
						<span class="text-xl font-lemonmilk"
							>{release.fields.name} / {release.fields.venue}</span
						>
					</div>
				</div>
				<div>
					<h3 class="text-lg font-lemonmilk">Lineup:</h3>
					<ul class="text-sm font-lemonmilk">
						{#each release.fields.lineup as artist}
							<li>{artist}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	{/each}
</div>

import { error } from '@sveltejs/kit';
import { client } from '$lib/contentfulClient';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const today = new Date();

	const events = await client.getEntries({
		content_type: 'events',
		order: 'fields.date',
		'fields.date[gte]': today.toJSON()
	});

	const pastevents = await client.getEntries({
		content_type: 'events',
		order: '-fields.date',
		'fields.date[lte]': today.toJSON()
	});

	return {
		events,
		pastevents
	};

	throw error(404, 'Not found');
}

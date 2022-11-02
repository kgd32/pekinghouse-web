import { error } from '@sveltejs/kit';
import { client } from '$lib/contentfulClient';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const loadartist = await client.getEntries({
		'fields.name': params.slug.toString(),
		content_type: 'artists'
	});

	const artist = loadartist?.items[0]?.fields;
	const releases = loadartist.includes?.Entry;

	return {
		artist,
		releases
	};

	throw error(404, 'Not found');
}

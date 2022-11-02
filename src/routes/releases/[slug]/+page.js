import { error } from '@sveltejs/kit';
import { client } from '$lib/contentfulClient';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const loadrelease = await client.getEntries({
		'fields.catnr': params.slug,
		content_type: 'releases'
	});

	const release = loadrelease.items[0].fields;

	return {
		release
	};

	throw error(404, 'Not found');
}

import { error } from '@sveltejs/kit';
import { client } from '$lib/contentfulClient';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const releases = await client.getEntries({
		content_type: 'releases',
		order: '-fields.releasedate'
	});

	return {
		releases
	};

	throw error(404, 'Not found');
}

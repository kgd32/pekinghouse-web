import { error } from '@sveltejs/kit';
import { client } from '$lib/contentfulClient';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	// get all blogs from Contentful
	const artists = await client.getEntries({
		content_type: 'artists'
	});

	return {
		artists
	};

	//  throw error(404, 'Not found');
}

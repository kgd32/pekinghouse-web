import { error } from '@sveltejs/kit';
import { client } from '$lib/contentfulClient';

/** @type {import('./$types').PageLoad} */
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
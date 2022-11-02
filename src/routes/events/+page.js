import { error } from '@sveltejs/kit';
import { client } from '$lib/contentfulClient';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const events = await client.getEntries({
        content_type: 'events'
    });

    
        return {
            events
        };

      throw error(404, 'Not found');
}
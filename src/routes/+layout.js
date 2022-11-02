import { error } from '@sveltejs/kit';
import { client } from '$lib/contentfulClient';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	return {
		url: url
	};
}

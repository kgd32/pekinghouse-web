import { dev } from '$app/environment';
//import { createClient } from 'contentful'
import { createClient } from 'contentful';
import contentful from 'contentful';

console.log('devmode: ', dev);

// different imports depending on dev or build
const createClientFunc = dev ? createClient : contentful.createClient;

const client = createClientFunc({
	space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN
});

export { client };

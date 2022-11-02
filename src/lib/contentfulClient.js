import { dev } from '$app/environment';
//import { createClient } from 'contentful'
import { createClient } from "contentful";
import contentful from 'contentful'

console.log('devmode: ', dev);

// different imports depending on dev or build
const createClientFunc = dev ? createClient : contentful.createClient

const client = createClientFunc({
    space: 'bes529vt0m37',
    accessToken: '0bN_0xEeQejW18bZ-iT9BcrZDd3n2m3HWY-r-I-4HzI'
});

export {client}
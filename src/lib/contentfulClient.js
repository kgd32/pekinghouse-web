import { dev } from '$app/environment';
//import { createClient } from 'contentful'
//import { createClient } from "contentful";
import contentful from 'contentful'

console.log('devmode: ', dev);
console.log('Node dev mode: ', process.env.NODE_ENV);

//const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient


const client = contentful.createClient({
    space: 'bes529vt0m37',
    accessToken: '0bN_0xEeQejW18bZ-iT9BcrZDd3n2m3HWY-r-I-4HzI'
});

export {client}
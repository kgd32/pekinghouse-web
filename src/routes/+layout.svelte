<script>
	import '../app.css';
    import PageTransitions from './PageTransitions.svelte';
    export let data;
	import { onMount } from 'svelte';
    import { navigating } from '$app/stores';
    import { loading } from '$lib/stores/loading'
    import Loading from './Loading.svelte'
	import {fly, fade, slide} from 'svelte/transition';
	import { quintOut,backIn,backOut, backInOut } from 'svelte/easing';

    import Footer from '$lib/components/Footer.svelte'

    $: $loading = !!$navigating

    let showMobileNav = false;

    function toggleNavbar() {
        showMobileNav = !showMobileNav
    }
</script>

<svelte:head>
    <title>Peking House</title>
</svelte:head>
<!-- Navbar goes here -->
<header class="w-full h-16 bg-black sticky top-0 z-50">
        <div class="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
            <!-- Logo Here -->
            <a class="text-white text-xl font-lemonmilkbold" href="https://www.kindacode.com">PEKING HOUSE</a>

            <!-- Menu links here -->

            <ul id="menu" class="hidden bg-black
                md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6 font-lemonmilk">

                <li class="md:hidden fixed top-4 right-6">
                    <button  class="text-right text-white text-4xl"
                    on:click={toggleNavbar}>&times;</button>
                </li>

                <li>
                    <a href="/" class="text-white opacity-70 hover:opacity-100 duration-300" >Home</a>
                </li>
                <li>
                    <a href="/releases" class="text-white opacity-70 hover:opacity-100 duration-300  " >Releases</a>
                </li>
                <li>
                    <a href="/artists" class="text-white opacity-70 hover:opacity-100 duration-300" >Artists</a>
                </li>

                <li>
                    <a href="/events" class="text-white opacity-70 hover:opacity-100 duration-300" >Events</a>
                </li>
                <li>
                    <a href="/contact" class="text-white opacity-70 hover:opacity-100 duration-300" >Contact</a>
                </li>
            </ul>

            <!-- This is used to open the menu on mobile devices -->
            <div class="flex items-center md:hidden">
                <button class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                    on:click={toggleNavbar}>
                    &#9776;
                </button>
            </div>

            <!-- Mobile menu -->
            {#if showMobileNav}
            <ul id="menu" class="{showMobileNav ? 'w-full h-screen' : 'hidden'} fixed z-50 top-0 right-0 px-10 py-16 bg-black
                font-lemonmilkbold" in:slide={{duration: 800, delay: 200}} out:fade>

                <li class="md:hidden z-90 fixed top-4 right-6">
                    <button class="text-right text-white text-4xl"
                    on:click={toggleNavbar}>&times;</button>
                </li>

                <li class="mb-6">
                    <a href="/" class="text-white text-5xl " on:click={toggleNavbar}>Home</a>
                </li>
                <li class="mb-6">
                    <a href="/releases" class="text-white text-5xl" on:click={toggleNavbar}>Releases</a>
                </li>
                <li class="mb-6">
                    <a href="/artists" class="text-white text-5xl" on:click={toggleNavbar}>Artists</a>
                </li>

                <li class="mb-6">
                    <a href="/events" class="text-white text-5xl" on:click={toggleNavbar}>Events</a>
                </li>
                <li class="mb-6">
                    <a href="/contact" class="text-white text-5xl" on:click={toggleNavbar}>Contact</a>
                </li>
            </ul>
            {/if}

    </header>




        <main class="w-full mx-auto ">
            <slot/>
        </main>

        {#if $loading === true}
	<div out:fade={{ delay: 700 }}>
        <Loading/>
	</div>
{/if}

<Footer/>
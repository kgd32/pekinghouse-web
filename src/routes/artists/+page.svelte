<script>
    import {flip} from 'svelte/animate';
	import {fly, fade} from 'svelte/transition';
    import { slide } from 'svelte/transition';
    import { browser, dev, prerendering } from '$app/environment';
    import { onMount } from 'svelte';
    import { navigating } from '$app/stores';
    import BlurhashImage from '$lib/blurhash/BlurhashImage.svelte';



  export let data;


$: loading = $navigating

onMount(async () => {

});
</script>


<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{#each data.artists.items as artist, index (index) }
<div class="flex flex-col p-8 md:p-8 lg:p-6 -z-10" in:fly="{{y: 100,delay: 450+(index*250), duration: 1400}}">
    <div class="flex justify-center sm:justify-center lg:justify-end md:justify-end mb-2 md:mb-1 lg:mb-1">
        <span class="text-4xl md:text-3xl lg:text-2xl tracking-wide md:tracking-wide lg:tracking-wide font-lemonmilkbold">{artist.fields.name}</span>
    </div>
      <BlurhashImage
      src={artist.fields?.image?.fields?.file?.url}
      hash={artist.fields?.blurhash}
      width={368}
      height={368}
      fadeDuration={400}
      />
     
</div>
{/each}
</div>


<style>
    :root {
  --base:              #000000;
  --bg-blend:          screen;
  --blur:              0px;
  --fg-blend:          exclusion;
  --foreground:        #27277c;
  --opacity:           0.7;
  --spacing:           0px;
}
.img-wrapper {
  background-color:    var(--base);
  overflow:            hidden;
  padding:             var(--spacing);
  position:            relative;
}

.img-wrapper img {
  filter:              grayscale(100%) contrast(1) blur(var(--blur));
  flex:                1 0 100%;
  height:              100%;
  max-width:           100%;
  mix-blend-mode:      var(--bg-blend);
  object-fit:          cover;
  opacity:             var(--opacity);
  position:            relative;
  width:               100%;
}


.img-wrapper::before {
  background-color:    var(--foreground);
  bottom:              0;
  content:             '';
  height:              100%;
  left:                0;
  mix-blend-mode:      var(--fg-blend);
  position:            absolute;
  right:               0;
  top:                 0;
  width:               100%;
  z-index:             1;
}

</style>
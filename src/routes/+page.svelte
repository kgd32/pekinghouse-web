<script>
      import { MetaTags } from 'svelte-meta-tags';
      import { onMount } from 'svelte';
      export let data; 

      let imageslider;
      $: slider = imageslider;

      function moveRight() {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
            slider.scrollTo({left: 0, behavior: 'smooth'})
        } else {
            slider.scrollBy({left, behavior: 'smooth'})
        }
      }

  

  function moveLeft() {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;
        const right = -slider.clientWidth;

        if (max === slider.scrollLeft) {
            slider.scrollTo({left: 0, behavior: 'smooth'})
        } else {
            slider.scrollBy({left: right, behavior: 'smooth'})
        }
      }
      function moveSlide() {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
            slider.scrollTo({left: 0, behavior: 'smooth'})
        } else {
            slider.scrollBy({left: left, behavior: 'smooth'})
        }
      }


      onMount(async () => {
        setInterval(moveSlide,6000)
	});

	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX / 100;
		m.y = event.clientY;
	}

let coverimages = [1,2,3,4,5]
</script>
<MetaTags title="Peking House" description="Peking House" />
<div class="w-full mx-auto">

<section class="relative bg-ph-blue-50">
  <div class="absolute w-full h-2/3  bg-white -z-0 hero"></div>

  
  <div class="h-2/3 w-full snap-mandatory snap-x overflow-x-auto md:overflow-hidden flex flex-nowrap text-center rotate-img pb-8" bind:this={imageslider}>
{#each data.releases.items as release }
  <div class="bg-transparent text-white space-y-4 flex-none w-full flex flex-col items-center py-16 z-40">
    <h2 class="text-3xl text-black max-w-md font-lemonmilkmedium text-focus-in">{release.fields.name}</h2>
    <img class="z-50 snap-center shadow-2xl" src={release.fields?.cover?.fields?.file?.url} alt={release.fields.name} height="600" width="600">
  </div>
  {/each}
  </div>
<!--
  <div class="flex justify-center">
    {m.x}
    <button class="rounded-lg bg-blue-200 p-2" on:click={moveLeft}>MOVE LEFT</button>
    <button class="rounded-lg bg-blue-200 p-2" on:click={moveRight}>MOVE RIGGHT</button>
  </div>
  -->
</section>

<section class="releases relative bg-ph-blue-50">

</section>

</div>

<style>
.hero {
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  
}

.releases {

  height: 800px;
   
}

@keyframes changewidth {
  0%   { transform: translateY(0); }
        50%  { transform: translateY(-15px); }
        100% { transform: translateY(0); }
}

.rotate-img {
  transform: perspective(400px) rotateY(2deg);
  transition: transform .4s ease-out;

}
.rotate-img:hover {
  transform: perspective(400px) rotateY(5deg);
  transition: transform .4s ease-out;
}


</style>
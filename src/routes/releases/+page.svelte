<script>
	import { json } from "@sveltejs/kit";


    export let data;
    console.log(data)
</script>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{#each data.releases.items as release }
<div class="flex flex-col p-12 md:p-8 lg:p-6">
    <div class="flex justify-center lg:justify-start md:justify-start mb-2 md:mb-1 lg:mb-1">
        <span class="text-md tracking-wide font-lemonmilkmedium">{release.fields.artists[0].fields.name}</span>
    </div>
    <div>
        <a href="/releases/{release.fields.catnr}">
        <img src={release.fields?.cover?.fields?.file?.url} alt={release.fields.name}/>
        </a>
    </div>
    <div class="flex justify-center lg:justify-end md:justify-end mb-2 md:mb-1 lg:mb-1">
        <span class="text-4xl md:text-3xl lg:text-2xl tracking-widest md:tracking-wide lg:tracking-wide font-lemonmilkbold">{release.fields.name}</span>
    </div>


</div>
{/each}
</div>

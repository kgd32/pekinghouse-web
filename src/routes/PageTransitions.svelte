<script>
  import { fly,fade } from 'svelte/transition';
  export let refresh = '';
</script>

<div class="transition-outer">
  {#key refresh}
    <div class="transition-inner"
        in:fade={{ duration: 800, delay: 300 }}
        out:fade={{ duration: 800}}>
      <slot />
    </div>
  {/key}
</div>

<style>
  .transition-outer {
    display: grid;
    grid-template: 1fr 1fr;
  }
  .transition-inner {
    grid-row: 1;
    grid-column: 1;
  }
</style>
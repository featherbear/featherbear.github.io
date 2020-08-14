<script>
  export let title = "";
  export let description;
  export let collapsible = true;
  export let opened = true;

  import { fade } from "svelte/transition";
</script>

<style lang="scss">
  section {
    h2 {
      margin-bottom: 5px;
      user-select: none;

      &.collapsible {
        cursor: pointer;
      }
    }
  }
</style>

<section>
  <h2 class:collapsible={collapsible} on:click={()=>{if(collapsible) {opened = !opened}}}>{title}</h2>
  <p>
    {#if description}{description}{/if}
  </p>
  {#if opened}
    <div transition:fade|local>
      <slot />
    </div>
  {/if}
</section>

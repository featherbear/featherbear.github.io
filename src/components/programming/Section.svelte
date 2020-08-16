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

    div {
      display: grid;
      grid-template-columns: repeat(auto-fill, 32%);
      grid-gap: 1%;
      align-content: flex-start;
    }
  }
</style>

<section>
  <h2
    class:collapsible
    on:click={() => {
      if (collapsible) {
        opened = !opened;
      }
    }}>
    {title}
  </h2>

  {#if description}
    <p>{description}</p>
  {/if}
  {#if opened}
    <div transition:fade|local>
      <slot />
    </div>
  {/if}
</section>

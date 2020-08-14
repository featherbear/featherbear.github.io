<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss">
  @import "bulma/sass/utilities/_all.sass";
  @import "bulma/sass/helpers/_all.sass";
  @import "bulma/sass/elements/container.sass";

  .container {
    @media screen and (max-width: 1024px) {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
</style>

{#if segment !== undefined}
  <Nav {segment} />
  <div class="container">
    <slot />
  </div>
{:else}
  <slot />
{/if}

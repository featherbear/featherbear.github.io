<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss">
  @import "bulma/sass/utilities/_all.sass";
  @import "bulma/sass/helpers/_all.sass";
  @import "bulma/sass/elements/container.sass";
</style>

{#if segment !== undefined}
  <Nav {segment} />
{/if}

<div class="container">
  <slot />
</div>

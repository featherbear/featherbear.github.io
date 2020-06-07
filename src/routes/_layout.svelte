<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

{#if segment !== undefined}
  <Nav {segment} />
{/if}

<slot />

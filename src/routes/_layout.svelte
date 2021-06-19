<script>
  import Nav from "../components/Nav.svelte";
  export let segment;

  import { onMount } from "svelte";
  import themePicker from "../components/_util/themePicker.js";
  onMount(() => {
    themePicker.init();
  });

  $: {
    if (process.browser && process.env.NODE_ENV !== 'development') {
      segment; // Listen to page changes
      window.fathom("trackPageview");
    }
  }
</script>

{#if segment !== undefined}
  <Nav {segment} />
  <div class="container siteContent">
    <slot />
  </div>
{:else}
  <slot />
{/if}

<style lang="scss" global>
  @import "bulma/sass/utilities/_all.sass";
  @import "bulma/sass/helpers/_all.sass";
  @import "bulma/sass/elements/container.sass";

  @import "../style/main.scss";

  .siteContent {
    @media screen and (max-width: 1024px) {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }

  @media print {
    .noprint {
      visibility: hidden;
      display: none;
    }
  }
</style>

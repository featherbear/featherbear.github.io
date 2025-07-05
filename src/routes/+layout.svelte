<script>
  import Nav from "../components/Nav.svelte";

  import { page } from "$app/state";

  import { onMount } from "svelte";
  import themePicker from "../components/_util/themePicker";
  onMount(() => {
    themePicker.init();
  });

  $: {
    if (!import.meta.env.SSR && location.hostname !== "localhost") {
      window.fathom("trackPageview");
    } else {
      console.info("Fathom tracking is not available in this environment.");
    }
  }
</script>

{#if page.url.pathname !== "/"}
  <Nav path={page.url.pathname} />
  <div class="container siteContent">
    <slot />
  </div>
{:else}
  <slot />
{/if}

<style lang="scss">
  :global {
    @import "../style/main.scss";
  }

  @import "bulma/sass/layout/container.scss";

  .siteContent {
    @media screen and (max-width: 1024px) {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }

    margin-bottom: 2em;
  }

  @media print {
    .noprint {
      visibility: hidden;
      display: none;
    }
  }
</style>

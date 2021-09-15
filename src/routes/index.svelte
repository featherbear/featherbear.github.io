<script>
  import { onMount } from "svelte";

  import DesignA from "../components/home/designA/_DesignA.svelte";
  import DesignB from "../components/home/designB/_DesignB.svelte";

  let page;
  onMount(() => {
    let usePageB = Math.random() >= 0.5;
    page = usePageB ? DesignB : DesignA;
    if (
      process.browser &&
      process.env.NODE_ENV !== "development" &&
      location.hostname !== "localhost"
    ) {
      window.fathom("trackPageview", {
        path: "#abtest-" + (usePageB ? "B" : "A"),
      });
    }
  });
</script>

<svelte:head>
  <title>Andrew Wong | featherbear</title>
</svelte:head>

{#if page}
  <svelte:component this={page} />
{/if}

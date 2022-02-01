<script>
  import { onMount } from "svelte";

  import DesignA from "../components/home/designA/_DesignA.svelte";
  import DesignB from "../components/home/designB/_DesignB.svelte";

  let _resolve;
  let page = new Promise((resolve, reject) => {
    _resolve = resolve;
  });
  onMount(() => {
    let hash = location.hash.slice(1)
    if (hash) {
      _resolve({
         a: DesignA,
         b: DesignB
       }[hash] ?? DesignA)
    } else {
      let isPageA = Math.random() < 0.3;
      _resolve(isPageA ? DesignA : DesignB);
      
      if (
        process.browser &&
        process.env.NODE_ENV !== "development" &&
        location.hostname !== "localhost"
      ) {
        window.fathom("trackPageview", {
          path: "/#abtest-" + (isPageA ? "A" : "B"),
        });
      }
    }

  });
</script>

<svelte:head>
  <title>Andrew Wong | featherbear</title>
</svelte:head>

{#await page}
  <div style="display: none"><DesignA /></div>
{:then page}
  <svelte:component this={page} />
{/await}

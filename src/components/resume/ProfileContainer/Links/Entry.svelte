<script>
  import { onMount } from "svelte";

  //#region Circle positioning
  export let x;
  export let y;
  export let theta;

  export let span;

  let xc = x / 2;
  let yc = y / 2;

  let _Y, _X;
  $: {
    _X = Number(xc / 2 + 10 + (span + xc) * Math.sin(theta));

    _Y = Number(yc / 2 + 10 + (span + yc) * Math.cos(theta));
  }
  //#endregion

  export let data = {};

  onMount(() => {
    if (data["b64link"]) data["link"] = atob(data["b64link"]);
    if (data["b64text"]) data["text"] = atob(data["b64text"]);
    data = { ...data };
  });

  import EntryContent from "./EntryContent.svelte";
</script>

<div class="profileEntry" style="top: {_Y}%; left: {_X}%;">
  {#if data.link}
    <a href={data["link"]}>
      <EntryContent {data} />
    </a>
  {:else}
    <EntryContent {data} />
  {/if}
</div>

<style>
  .profileEntry {
    position: absolute;
  }
</style>

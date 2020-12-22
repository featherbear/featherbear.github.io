<script>
  //#region Circle positioning
  export let x;
  export let y;
  export let theta;

  export let span;

  let xc = x / 2;
  let yc = y / 2;

  let _Y, _X;
  $: {
    _Y = Number(xc + (span + xc) * Math.cos(theta));
    _X = Number(yc + (span + yc) * Math.sin(theta));
  }
  //#endregion

  export let data = {};

  import EntryContent from "./EntryContent.svelte";
</script>

<style>
  .profileEntry {
    position: absolute;
  }
</style>

<div
  class="profileEntry"
  style="width: {span}px; height: {span}px; border-radius: {span}px; top: {_Y}%; left: {_X}%; transform: translateY(-50%) translateX(-50%)">
  {#if data.link}
    <a href={data['link']}>
      <EntryContent {data} />
    </a>
  {:else}
    <EntryContent {data} />
  {/if}
</div>

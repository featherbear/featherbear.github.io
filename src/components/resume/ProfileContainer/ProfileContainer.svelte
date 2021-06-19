<script>
  import ProfilePicture from "./ProfilePicture.svelte";

  import Entry from "./Links/Entry.svelte";
  import { pointGen } from "./Links/CircleStuff";
  import links from "./Links/links";

  let x = 150;
  let y = 150;
  let span = -5;
</script>

<style>
  .profileContainer {
    position: relative;
    /* z-index: 10000; */
    margin-top: 10px;
  }
</style>

<div class="profileContainer" style="width: {x}px; height: {y}px;">
  <ProfilePicture />
  {#each [...pointGen(links.length, 1)] as theta, i}
    <Entry {x} {y} {theta} {span} data={links[i]} />
  {/each}
</div>

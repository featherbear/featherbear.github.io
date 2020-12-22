<script>
  import ProfilePicture from "./ProfilePicture.svelte";

  import Entry from "./Links/Entry.svelte";
  import { pointGen } from "./Links/CircleStuff";
  import links from "./Links/links";

  let x = 100;
  let y = 100;
  let span = 10;
</script>

<style>
  .profileContainer {
    position: relative;
    z-index: 10000;
  }
</style>

<div class="profileContainer" style="width: {x}px; height: {y}px;">
  <ProfilePicture />
  {#each [...pointGen(links.length)] as theta, i}
    <Entry {x} {y} {theta} {span} data={links[i]} />
  {/each}
</div>

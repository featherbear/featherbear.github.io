<script>
  let bgImages = [
    "assets/images/bg/bg01.jpg",
    "assets/images/bg/bg02.jpg",
    "assets/images/bg/bg03.jpg",
    "assets/images/bg/bg04.jpg",
    "assets/images/bg/bg05.jpg",
    "assets/images/bg/bg06.jpg",
    "assets/images/bg/bg07.jpg",
    "assets/images/bg/bg08.jpg",
    "assets/images/bg/bg09.jpg",
    "assets/images/bg/bg10.jpg",
    "assets/images/bg/bg11.jpg",
    "assets/images/bg/bg12.jpg",
  ];
  let currentIdx = 0;

  import { onMount } from "svelte";
  onMount(() => {
    if (bgImages.length > 1) {
      setInterval(() => {
        currentIdx = (currentIdx + 1) % bgImages.length;
      }, 10 * 1000);
    }
  });
</script>

<style lang="scss">
  .backgroundContainer,
  .background {
    width: 100%;
    height: 100%;
  }
  ul.background {
    position: fixed;
    list-style: none;
    z-index: -1;
    margin: 0;
    padding: 0;

    li {
      position: absolute;

      width: 100%;
      height: 100%;

      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;

      background-position: center center;

      opacity: 0;
      -webkit-transition: opacity 1s;
      -moz-transition: opacity 1s;
      transition: opacity 1s;

      &.active {
        opacity: 1;
      }
    }
  }
</style>

<div class="backgroundContainer">
  <slot />

  <ul class="background">
    {#each bgImages as imgPath, i}
      <li
        class:active={currentIdx == i}
        style="background-image: url({imgPath})" />
    {/each}
  </ul>

</div>

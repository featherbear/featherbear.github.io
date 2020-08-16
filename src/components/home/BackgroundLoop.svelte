<script>
  const basePath = "assets/images/bg/"
  let bgImages = [
    "bg01.jpg",
    "bg02.jpg",
    "bg03.jpg",
    "bg04.jpg",
    "bg05.jpg",
    "bg06.jpg",
    "bg07.jpg",
    "bg08.jpg",
    "bg09.jpg",
    "bg10.jpg",
    "bg11.jpg",
    "bg12.jpg",
    "bg13.jpg"
  ];
  let currentIdx = -1;

  import { onMount } from "svelte";
  onMount(() => {
    currentIdx = Math.floor(Math.random() * bgImages.length)
    if (bgImages.length > 1) {
      setInterval(() => {
        currentIdx = (currentIdx + 1) % bgImages.length;
      }, 11 * 1000);
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
    background-color: #131111;

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
        style="background-image: url({basePath + imgPath})" />
    {/each}
  </ul>

</div>

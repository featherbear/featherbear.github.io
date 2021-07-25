<script>
  const basePath = "assets/images/bg/"
  let bgImages = [
    "bg01-min.jpg",
    "bg02-min.jpg",
    "bg03-min.jpg",
    "bg04-min.jpg",
    "bg05-min.jpg",
    "bg06-min.jpg",
    "bg07-min.jpg",
    "bg08-min.jpg",
    "bg09-min.jpg",
    "bg10-min.jpg",
    "bg11-min.jpg",
    "bg12-min.jpg",
    "bg13-min.jpg",
    "bg14-min.jpg",
    "bg15-min.jpg",
    "bg16-min.jpg",
    "bg17-min.jpg",
    "bg18-min.jpg",
    "bg19-min.jpg"
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

<script>
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
    "bg19-min.jpg",
  ];

  let items = {};

  let currentIdx = -1;
  async function selectIdx(i) {
    if (!items[i].style.backgroundImage) {
      // Image doesn't exist, preload then set
      await new Promise((resolve, reject) => {
        const imageUrl = `assets/images/bg/${bgImages[i]}`;

        let preload = document.createElement("img");
        preload.src = imageUrl;

        preload.addEventListener("load", () => {
          items[i] && (items[i].style.backgroundImage = `url(${imageUrl})`);
          preload = null;
          resolve();
        });
      });
    }

    currentIdx = i;
  }

  import { onMount } from "svelte";
  onMount(() => {
    let interval;
    selectIdx(Math.floor(Math.random() * bgImages.length));

    if (bgImages.length > 1) {
      interval = setInterval(() => {
        selectIdx((currentIdx + 1) % bgImages.length);
      }, 11 * 1000);
    }

    return () => {
      // Cleanup routine
      clearInterval(interval);
    };
  });
</script>

<div class="backgroundContainer">
  <slot />

  <ul class="background">
    {#each bgImages as imgPath, i}
      <li class:active={currentIdx == i} bind:this={items[i]} />
    {/each}
  </ul>
</div>

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

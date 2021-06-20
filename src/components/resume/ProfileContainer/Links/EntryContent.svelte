<script>
  import Fa from 'svelte-fa'
  export let data = {};
</script>

<style lang="scss">
  .entryContent {
    display: ruby;
    transform: translateY(-30%);
    font-size: 1.2em;
  }

  @media screen and (orientation: portrait) {
    .entryContent {
      font-size: 1.4em !important;

      .text {
        display: none !important;
      }
    }
  }
</style>

<span class="entryContent">
  {#if data['icon']}<Fa icon={data['icon']} size="lg" />{/if}
  <span class="text">{data['text'] || ""}</span>
</span>

<script>
  import Fa from 'svelte-fa'
  export let data = {};
</script>

<style>
  .entryContent {
    display: inline-block;
    width: 400px;
    transform: translateY(-30%);
    font-size: 1.2em;
  }
</style>

<span class="entryContent">
  {#if data['icon']}<Fa icon={data['icon']} size="lg" />{/if}
  {data['text'] || ""}
</span>

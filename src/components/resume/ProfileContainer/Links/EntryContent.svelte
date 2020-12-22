<script>
  export let data = {};
</script>

<style>
  .entryContent {
    display: inline-block;
    width: 300px;
    transform: translateY(-30%);
  }
</style>

<span class="entryContent">
  {#if data['icon']}<i>{data['icon']}</i>{/if}
  {data['text']}
</span>

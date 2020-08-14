<script>
  export let href = "#";
</script>

<style>
  div {
    border: 1px solid black;
    display: inline-block;
    padding: 5px;
    color: black;
  }
</style>

<a {href} rel="prefetch">
  <div>
    <slot />
  </div>
</a>

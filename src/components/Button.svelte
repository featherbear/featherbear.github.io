<script>
  export let href;
  export let openInNewTab = false;
</script>

<a {href} target={openInNewTab ? "_blank" : "_self"}><slot /></a>

<style lang="scss">
  a {
    text-align: center;
    font: normal normal normal 16px Coves;

    border: 4px solid #555;
    color: #555;
    padding: 5px;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.5s;
    display: inline-block;

    &:hover {
      opacity: 0.7;
    }
  }
</style>

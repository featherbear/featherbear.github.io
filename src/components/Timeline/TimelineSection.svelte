<script>
  export let text = "";
</script>

<article>{text}</article>

<style lang="scss">
  @import "./style.scss";

  article {
    position: absolute;
    transform: translateX(-$sectionLeftOffset);
    color: #808080;
  }
</style>

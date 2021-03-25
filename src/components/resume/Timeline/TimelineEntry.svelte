<article>text</article>

<style lang="scss">
  @import "./style.scss";

  article {
    position: relative;
    margin-left: $dotSpacing;

    &::before {
      content: "";
      margin-left: -$dotSpacing;
      height: $dotSize;
      width: $dotSize;
      border-radius: $dotSize;
      background-color: grey;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: $dotColour;
    }
  }
</style>

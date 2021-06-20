<script>
  export let rightAlign = false;
</script>

<span class="nameBlock" class:rightAlign>
  Andrew
  <span>Jin-Meng</span>
  Wong
</span>

<style lang="scss">
  @media screen and (orientation: portrait) {
    .nameBlock {
      font-size: 3em !important;
    }
  }

  .nameBlock {
    font: normal normal normal 16px Coves;

    font-size: 4em;
    font-weight: bold;
    line-height: 1em;
    color: black;

    > span {
      margin: -0.4em 0 -0.8em 2.5em;
      font-size: 0.3em;
      line-height: 0.3em;
      font-weight: normal;
      display: block;
      color: grey;

    }

    &.rightAlign {
        text-align: right;
        float: right;
        > span {
            margin-right: 3px;
        }
    }
  }
</style>

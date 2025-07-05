<script>
  export let rightAlign = false;
  export let fullBlack = false;
  export let glow = false;
</script>

<span class="nameBlock" class:rightAlign class:glow>
  Andrew
  <span class:black={fullBlack}>Jin-Meng</span>
  Wong
</span>

<style lang="scss">
  @media screen and (orientation: portrait) {
    .nameBlock {
      font-size: 3em !important;
    }
  }

  .nameBlock {
    user-select: none;
    
    font: normal normal normal 16px Coves;

    font-size: 4em;
    font-weight: bold;
    line-height: 1em;
    color: black;

    > span {
      margin: -0.3em 0 -0.8em 2.5em;
      font-size: 0.3em;
      line-height: 0.3em;
      font-weight: normal;
      display: block;
      color: grey;

      &.black {
        color: inherit;
      }
    }    

    &.rightAlign {
        text-align: right;
        float: right;
        > span {
            margin-right: 3px;
        }
    }

    &.glow {
      text-shadow: rgba(255,255,255, 0.1) 0px 0px 10px;
    }
  }
</style>

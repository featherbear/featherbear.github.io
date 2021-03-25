<script>
  export let data = [
    /*    
    [
        title: string,
        [
            {
                title: string,
                description: string,
            },
            {
                ...
            }
        ]
    ]
*/
  ];

  import Entry from "./TimelineEntry.svelte";
</script>

<div class="line">
  line
  <Entry />
</div>

<style lang="scss">
  @import "./style.scss";

  .line {
    position: relative;
    padding-bottom: 20px;

    &::before {
      z-index: -1;
      top: 0;
      bottom: 0;
      position: absolute;

      background-color: $lineColour;

      content: "";
      border-left: $lineWidth solid $lineColour;
      margin-left: calc(#{$dotSize / 2} - #{$lineWidth / 2});
    }
  }
</style>

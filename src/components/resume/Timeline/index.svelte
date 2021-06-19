<script>
  import Entry from "./TimelineEntry.svelte";
  import Section from "./TimelineSection.svelte";
</script>

<div class="line">
  <Section text="2021" />
  <Entry text="BBBB" />
  <Entry text="AACCCCAA" />
  <Entry text="AACCCAA" />
  <Entry text="AAAA" />
  <Section text="2020" />
  <Entry text="AAAA" />
  <Entry text="BBBB" />
  <Entry text="AACCCCAA" />
  <Entry text="AACCCAA" />
  <Entry text="AAAA" />
  <Section text="2019" />
  <Entry text="AAAA" />
  <Entry text="BBBB" />
  <Entry text="AACCCCAA" />
  <Entry text="AACCCAA" />
  <Entry text="AAAA" />
  <Section text="2018" />
  <Section text="2017" />
  <Section text="2016" />
  <Section text="2015" />
</div>

<style lang="scss">
  @import "./style.scss";

  .line {
    transform: translateX($sectionLeftOffset);
    position: relative;
    padding-top: 30px;
    padding-bottom: 20px;
    height: 100%;

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

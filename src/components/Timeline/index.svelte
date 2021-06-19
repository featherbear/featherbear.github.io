<script>
  import Entry from "./TimelineEntry.svelte";
  import Section from "./TimelineSection.svelte";
  export let data = [];
  export let preContent;

  let categories = [];
  $: categories = [
    ...new Set(
      data
        .map((section) =>
          section.contents.map((entry) => entry.categories || null)
        )
        .flat()
        .flat()
    ),
  ].filter((v) => v);

  let activeCategory = null;
</script>

<div class="line">
  {#if preContent}<div class="preContent">{preContent}</div>{/if}
  {#each data as section}
    {#if !activeCategory || section.contents
        .map((e) => e.categories)
        .flat()
        .includes(activeCategory)}
      <Section text={section.title || ">UNKNOWN TITLE<"} />
      {#each section.contents as entry}
        {#if !activeCategory || entry.categories.includes(activeCategory)}
          <Entry {...entry} />
        {/if}
      {/each}
    {/if}
  {/each}
</div>

<div class="noprint">
  <span>Filter Categories</span>
  {#each categories as category}
    <button
      class="categorySelect"
      class:isActiveCategory={activeCategory == category || !activeCategory}
      on:click={() =>
        activeCategory == category
          ? activeCategory = null
          : (activeCategory = category)}>{category}</button
    >
  {/each}
</div>

<style lang="scss">
  @import "./style.scss";

  .line {
    transform: translateX($sectionLeftOffset);
    position: relative;
    padding-top: 20px;
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

  .preContent {
    position: relative;
    white-space: pre;
    margin-left: $dotSpacing;
    margin-bottom: 1.5em;
    margin-top: 1em;
    &::before {
      content: "$> "
    }
  }

  .categorySelect {
    cursor: pointer;

    transition: opacity 0.2s;
    opacity: 1;

    border-radius: 6px;
    border: none;

    padding: 5px;
    margin: 0 5px;

    color: #fff;
    background-color: #808080;

    
    &:not(.isActiveCategory) {
      opacity: 0.6;

      &:hover {
        opacity: 0.9;
      }
    }
  }
</style>

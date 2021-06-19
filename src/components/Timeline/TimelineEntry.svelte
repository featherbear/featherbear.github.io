<script>
  export let title = "";
  export let subtitle = null;
  export const categories = [];
  export let description = null;
</script>

<article>
  <h1>{title}</h1>
  {#if subtitle}<subtitle>{subtitle}</subtitle>{/if}
  {#if description}
    <p>
      {#if Array.isArray(description)}
        <ul>
          {#each description as entry}
            <li>{entry}</li>
          {/each}
        </ul>
      {:else}
        {description}
      {/if}
    </p>
  {/if}
</article>

<style lang="scss">
  @import "./style.scss";

  article {
    position: relative;
    margin-left: $dotSpacing;
    margin-bottom: 8px;

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

    h1 {
      margin: 0;
      font-size: 1em;
      display: inline;
    }

    subtitle {
      font-style: italic;
      color: #808080;
    }

    p {
      white-space: pre;
      
      color: #808080;
      margin-top: 5px;
      margin-bottom: 10px;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
    }
  }
</style>

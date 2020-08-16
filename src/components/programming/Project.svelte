<script>
  export let title; // String
  export let description; // String

  export let image; // "image link"
  export let preview; // "iframe link"

  export let repo; // "Link"
  export let site; // "Link"
  export let blog; // "Link"
  export let stack; // [String]

  if (typeof stack === "string") {
    stack = [stack]
  }
  
  import Button from "../Button.svelte";
</script>

<style lang="scss">
  article {
    // background-color: hsla(0, 0%, 83%, 0.6);
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;

    h4, .buttons {
      user-select: none;
    }

    h4 {
      margin: 0;
    }
  }
    .preview {
      height: 180px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      iframe {
        max-width: initial;
        width: 400%;
        height: 400%;

        -ms-zoom: 0.25;
        -moz-transform: scale(0.25);
        -moz-transform-origin: 0 0;
        -o-transform: scale(0.25);
        -o-transform-origin: 0 0;
        -webkit-transform: scale(0.25);
        -webkit-transform-origin: 0 0;

        border: none;
        overflow: hidden;

        pointer-events: none;
      }
    }
</style>

<article>
  {#if preview || image}
    <div class="preview">
      {#if preview}
        <iframe
          src={preview}
          scrolling="no"
          title="preview"
          sandbox="allow-scripts allow-same-origin" />
      {:else}
        <img src={image} alt="preview" />
      {/if}

    </div>
  {/if}
  <h4>{title}</h4>
  <div>
    {#if stack}Technology stack: {stack.join(', ')}{/if}
  </div>
  <p>
    {#if description}{description}{/if}
  </p>
  <div class="buttons">
    {#if repo}
      <Button href={repo}>GitHub</Button>
    {/if}
    {#if site}
      <Button href={site}>Site</Button>
    {/if}
    {#if blog}
      <Button href={blog}>Blog</Button>
    {/if}
  </div>
</article>

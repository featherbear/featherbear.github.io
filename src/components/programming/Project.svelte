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
    stack = [stack];
  }

  import Button from "./Button.svelte";
</script>

<style lang="scss">
  article {
    margin-bottom: 10px;

    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0px 0 1px rgba(10, 10, 10, 0.02);

    cursor: default;
    user-select: none;

    display: flex;
    flex-direction: column;

    .preview {
      height: 180px;

      overflow: hidden;

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

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

    .content {
      flex: 1;
      padding: 10px;

      h4 {
        /* Title */
        margin: 0;
      }

      span {
        /* Stack */
        font-size: 0.8em;
      }

      p {
        color: var(--font-color-2);
        /* Description */
        white-space: pre-line;
      }
    }

    .buttons {
      display: flex;
      border-top: 1px solid #ededed;
    }
  }
</style>

<article>
  {#if preview || image}
    <div
      class="preview"
      style={image ? `background-image: url(${image});` : ''}>
      {#if preview}
        <iframe
          src={preview}
          scrolling="no"
          title="preview"
          sandbox="allow-scripts allow-same-origin" />
      {/if}

    </div>
  {/if}
  <div class="content">
    <h4>{title}</h4>

    {#if stack}
      <span>Technology stack: {stack.join(', ')}</span>
    {/if}

    {#if description}
      <p>{description}</p>
    {/if}

  </div>
  {#if repo || site || blog}
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
  {/if}
</article>

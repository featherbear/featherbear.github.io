<script lang="ts">
  type URL = string;

  export let data: Partial<{
    title: string;
    description: string;
    image: URL;
    preview: URL;
    repo: URL;
    site: URL;
    blog: URL;
    stack: string | string[];
  }>;

  let stack = typeof data.stack === "string" ? [data.stack] : data.stack;

  import Button from "./Button.svelte";
</script>

<article>
  {#if data.preview || data.image}
    <div
      class="preview"
      style={data.image ? `background-image: url(${data.image});` : ""}
    >
      {#if data.preview}
        <iframe
          src={data.preview}
          scrolling="no"
          title="preview"
          sandbox="allow-scripts allow-same-origin"
        />
      {/if}
    </div>
  {/if}
  <div class="content">
    <h4>{data.title}</h4>

    {#if stack}
      <span>Technology stack: {stack.join(", ")}</span>
    {/if}

    {#if data.description}
      <p>{data.description}</p>
    {/if}
  </div>
  {#if data.repo || data.site || data.blog}
    <div class="buttons">
      {#if data.repo}
        <Button href={data.repo}>GitHub</Button>
      {/if}
      {#if data.site}
        <Button href={data.site}>Site</Button>
      {/if}
      {#if data.blog}
        <Button href={data.blog}>Blog</Button>
      {/if}
    </div>
  {/if}
</article>

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

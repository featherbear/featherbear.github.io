<script lang="ts">
  import { onMount } from "svelte";

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

  import backgroundImageLoad from "./BackgroundImagePreload";
  import Button from "./Button.svelte";
  import SpinLoader from "./SpinLoader.svelte";

  let shouldDisplay = !(data.preview || data.image);
  let mediaReady = shouldDisplay;
  let mediaLoadTimeout: ReturnType<typeof setTimeout>;
  function handleResourceLoad() {
    clearTimeout(mediaLoadTimeout);
    shouldDisplay = true;
    mediaReady = true;
  }

  onMount(() => {
    const timeout = 10 * 1000;
    if (!mediaReady) {
      mediaLoadTimeout = setTimeout(() => {
        console.warn("Exceeded timeout, forcing display but keeping loader");
        shouldDisplay = true;
      }, timeout);
    }
  });
</script>

<article class:isLoading={!shouldDisplay}>
  {#if data.preview || data.image}
    <div
      use:backgroundImageLoad={data.image || null}
      class="preview"
      on:load={handleResourceLoad}
    >
      {#if data.preview}
        <iframe
          src={data.preview}
          scrolling="no"
          title="preview"
          sandbox="allow-scripts allow-same-origin"
          on:load={handleResourceLoad}
        />
      {/if}
      {#if !mediaReady}
        <div class="spinContainer">
          <SpinLoader />
        </div>
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

    &:hover {
      box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.3),
      0 0px 0 1px rgba(10, 10, 10, 0.06);
    }

    cursor: default;
    user-select: none;

    display: flex;
    flex-direction: column;

    --radius: 8px;
    border-radius: var(--radius);
    overflow: hidden;

    .preview {
      height: 180px;

      
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: calc(var(--radius) * 3);
      border-bottom-left-radius: 0;

      overflow: hidden;

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      .spinContainer {
        height: 100%;
        display: flex;
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

    --defaultTransition: box-shadow 0.3s;
    transition: var(--defaultTransition);

    &:not(.isLoading) {
      transition: var(--defaultTransition), filter 2s;
    }
    &.isLoading {
      filter: blur(3px) grayscale(0.8);
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

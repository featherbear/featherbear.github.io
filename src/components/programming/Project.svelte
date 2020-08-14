<script>
  export let title; // String
  export let description; // String
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
</style>

<article>
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

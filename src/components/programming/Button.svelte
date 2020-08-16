<script>
  export let href = "#";
</script>

<style lang="scss">
  a {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;

    div {
      // border: 1px solid var(--font-color);
      padding: 5px;

      display: flex;
      align-items: center;
      justify-content: center;
      font-variant: all-small-caps;
    }

    &:not(:last-child) {
      border-right: 1px solid #ededed;
    }

    transition: hover 0.6s;
    @if --header-link-hover-background-color {
      &:hover {
        background-color: var(--header-link-hover-background-color) !important;
      }
    }
  }
</style>

<a {href} rel="prefetch">
  <div>
    <slot />
  </div>
</a>

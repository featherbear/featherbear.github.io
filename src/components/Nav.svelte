<script>
  export let segment;

  let hamburgerOpen = false;
</script>

<style lang="scss">
  @import "bulma/sass/utilities/_all.sass";
  @import "bulma/sass/helpers/_all.sass";
  @import "bulma/sass/elements/container.sass";
  @import "bulma/sass/components/navbar.sass";

  nav {
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
      Arial, sans-serif;

    position: sticky !important;
    left: 0;
    right: 0;
    top: 0;
    z-index: 30;
    background-color: var(--header-background-color) !important;

    .navbar-item.title {
        color: var(--header-logo-font-color) !important;
      }

    .navbar-item:not(.title) {
      color: var(--header-link-color);
      
      &.active {
        color: var(--header-link-active-color) !important;
      }

      &:hover {
        color: var(--header-link-hover-color);
      }

      @if --header-link-hover-background-color {
        &:hover {
          background-color: var(--header-link-hover-background-color) !important;
        }
      }

    }
  }
</style>

<nav
  class="navbar is-unselectable noprint"
  role="navigation"
  aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item is-size-3 title" href="/">andrew wong</a>
      <span
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navmenu"
        class:is-active={hamburgerOpen}
        on:click={() => (hamburgerOpen = !hamburgerOpen)}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </span>
    </div>

    <div class:is-active={hamburgerOpen} class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" class:active={segment === 'blog'} href="/blog">
          blog
        </a>
        <a class="navbar-item" class:active={segment === 'about'} href="/about">
          about me
        </a>
        <a
          class="navbar-item"
          class:active={segment === 'photos'}
          href="/photos">
          photography
        </a>
        <a
          class="navbar-item"
          class:active={segment === 'programming'}
          href="/programming">
          programming
        </a>
      </div>
    </div>
  </div>
</nav>

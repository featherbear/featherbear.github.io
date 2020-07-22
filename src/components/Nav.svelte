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
  }
</style>

<nav
  class="navbar is-unselectable"
  role="navigation"
  aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item has-text-grey-darker is-size-3 title" href="/">andrew wong</a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navmenu"
        class:is-active={hamburgerOpen}
        on:click={() => hamburgerOpen = !hamburgerOpen}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div class:is-active={hamburgerOpen} class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item {segment === 'blog' ? 'has-text-black-ter' : 'has-text-grey'}" href="/blog">blog</a>
        <a class="navbar-item {segment === 'about' ? 'has-text-black-ter' : 'has-text-grey'}" href="/about">about me</a>
        <a class="navbar-item {segment === 'photos' ? 'has-text-black-ter' : 'has-text-grey'}" href="/photos">photography</a>
        <a class="navbar-item {segment === 'programming' ? 'has-text-black-ter' : 'has-text-grey'}" href="/programming">programming</a>
      </div>
    </div>
  </div>
</nav>

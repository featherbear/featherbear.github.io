<script>
  export let href;
</script>

<style lang="scss">
  /* Profile sections */
  a span {
    display: block;
    text-align: right !important;
    font-size: 5vh;

    -webkit-clip-path: polygon(2vw 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(2vw 0, 100% 0%, 100% 100%, 0% 100%);

    text-transform: lowercase;
    font-weight: bold;
    color: white;

    margin-top: 2em;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s ease-in-out;
    opacity: 0.6;

    padding-left: 2vw;
    padding-right: 1vw;
    &:hover {
      padding-right: 5vw;
      opacity: 1;
    }
  }

  #sections a:nth-child(1) span {
    background-color: #5ec0e9;
    margin-left: -15vw;
  }
  #sections a:nth-child(2) span {
    background-color: #c64534;
    margin-left: -20vw;
  }
  #sections a:nth-child(3) span {
    background-color: #ffd166;
    margin-left: -25vw;
  }
  #sections a:nth-child(4) span {
    background-color: #9ac447;
    margin-left: -30vw;
  }
  /* End profile sections */
</style>

<a {href} rel="prefetch">
  <span>
    <slot />
  </span>
</a>

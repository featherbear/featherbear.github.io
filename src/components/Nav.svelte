<script>
  export let segment;
</script>

<style lang="scss">
  $height: 90px;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #f4f4f4;
    z-index: 500;
    height: $height;
    overflow: hidden;
    -webkit-transition: height 0.3s;
    -moz-transition: height 0.3s;
    transition: height 0.3s;

    a {
      color: #555;
      text-decoration: none;
    }

    .header-inner {
      width: 95%;
      max-width: 69em;
      margin: 0 auto;
      padding: 0 1.875em;

      .active {
        color: #ddd;
      }
    }

    h1,
    nav {
      display: inline-block;
      position: relative;
    }

    /* We just have one-lined elements, so we'll center the elements with the line-height set to the height of the header */

    h1 {
      text-transform: uppercase;
      color: #333;
      letter-spacing: 4px;
      font-size: 2em;
      margin: 0;
      float: left;

      a,
      a:hover {
        color: #555 !important;
      }
    }

    nav {
      float: right;

      a {
        color: #aaa;
        font-weight: 700;
        margin: 0 0 0 15px;
        font-size: 1.4em;
        text-transform: lowercase;

        &:hover {
          color: #333 !important;
        }
      }
    }

    /* Transitions and class for reduced height */

    h1,
    nav a {
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
      line-height: $height;
    }
  }
  //   /* Example Media Queries */

  //   @media screen and (max-width: 55em) {
  //     .cbp-af-header .cbp-af-inner {
  //       width: 100%;
  //     }
  //     .cbp-af-header h1,
  //     .cbp-af-header nav {
  //       display: block;
  //       margin: 0 auto;
  //       text-align: center;
  //       float: none;
  //     }
  //     .cbp-af-header h1,
  //     .cbp-af-header nav a {
  //       line-height: 115px;
  //     }
  //     .cbp-af-header nav a {
  //       margin: 0 10px;
  //     }
  //     .cbp-af-header.cbp-af-header-shrink h1,
  //     .cbp-af-header.cbp-af-header-shrink nav a {
  //       line-height: 45px;
  //       margin-top: 10px;
  //       margin-bottom: -10px;
  //     }
  //     .cbp-af-header.cbp-af-header-shrink h1 {
  //       font-size: 2em;
  //     }
  //     .cbp-af-header.cbp-af-header-shrink nav a {
  //       font-size: 1em;
  //     }
  //   }

  //   @media screen and (max-width: 32.25em) {
  //     .cbp-af-header nav a {
  //       font-size: 1em;
  //     }
  //   }

  //   @media screen and (max-width: 24em) {
  //     .cbp-af-header nav a,
  //     .cbp-af-header.cbp-af-header-shrink nav a {
  //       line-height: 1;
  //     }
  //   }

  //   @import url(http://fonts.googleapis.com/css?family=Lato:300, 400, 700);
  //   html {
  //     font-family: "Lato", Calibri, Arial, sans-serif;
  //     background: #f9f9f9;
  //     font-weight: 300;
  //     font-size: 15px;
  //     color: #333;
  //   }

    :global(body) {
      margin-top: $height !important;
    }

  //   ::-webkit-scrollbar {
  //     width: 5px;
  //   }
  //   ::-webkit-scrollbar-thumb {
  //     background: #476c9b;
  //   }

  //   a {
  //     text-decoration: none;
  //   }

  //   .hidescroll {
  //     overflow-y: hidden;
  //   }
</style>

<div class="header">
  <div class="header-inner">
    <h1>
      <a href="/">Andrew Wong</a>
    </h1>
    <nav>
      <a class:active={segment === 'blog'} href="/blog">Blog</a>
      <a class:active={segment === 'about'} href="/about">About Me</a>
      <a class:active={segment === 'photography'} href="/photography">
        Photography
      </a>
      <a class:active={segment === 'programming'} href="/programming">
        Programming
      </a>
    </nav>
  </div>
</div>

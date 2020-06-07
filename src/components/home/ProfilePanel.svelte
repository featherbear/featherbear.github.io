<style lang="scss">
  /* Profile side pane */

  .profile {
    width: 18vw;
    background-color: rgba(255, 255, 255, 0.85);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    padding: 0 1vw;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;

    &:hover {
      background-color: whitesmoke;
    }

    img {
      border-radius: 50%;
      margin: 5vh auto;

      background-image: url(/assets/images/profilepic.jpg);
      background-size: cover;
      width: 18vw;
      height: 18vw;
    }
    /* Name */

    .nameBlock {
      font-size: 5vw;
      display: block;
      font-weight: bold;
      line-height: 2.5vh;

      > span {
        font-size: 1.3vw;
        font-weight: normal;
        display: inline-block;
        text-indent: 4vw;
        color: grey;
      }
    }

    .linkBlock {
      margin-top: 5vh;

      a {
        margin: 0.5vh auto;
        display: block;
        text-rendering: auto;
        color: grey !important;

        > span {
          word-wrap: break-word;
          font-size: 1.2em;
          color: grey;
          opacity: 0.6;
          -o-transition: opacity 0.5s;
          -ms-transition: opacity 0.5s;
          -moz-transition: opacity 0.5s;
          -webkit-transition: opacity 0.5s;
          transition: opacity 0.5s;

          &:hover {
            opacity: 1;
          }
          &:before {
            background-size: cover;
            display: inline-block;
            content: "";
            width: 2em;
            height: 2em;
            vertical-align: middle;
          }

          span {
            margin-left: 5px;
          }
        }

        &[href*="mailto"] > span:before {
          background-image: url(/assets/icons/mail-squircle.svg);
        }
        &[href*="linkedin"] > span:before {
          background-image: url(/assets/icons/linkedin-squircle.svg);
        }

        &[href*="facebook"] > span:before {
          background-image: url(/assets/icons/facebook-squircle.svg);
        }

        &[href*="github"] > span:before {
          background-image: url(/assets/icons/code-squircle.svg);
        }

        &[href*="instagram"] > span:before {
          background-image: url(/assets/icons/instagram.svg);
        }
      }
    }
    p {
      text-align: center;

      a[href*="Resume"] {
        border: 4px solid #555;
        color: #555;
        padding: 5px;
        font-size: 22px;
        font-weight: bold;
        text-transform: uppercase;
        transition: 0.5s;
        display: inline-block;
      }

      a[href*="Resume"]:hover {
        opacity: 0.7;
      }
    }
  }
  @media screen and (orientation: portrait) {
    .profile div a span span {
      text-indent: -10000px;
      position: absolute;
    }
    .profile div a {
      text-align: center;
    }
    .profile p a[href*="Resume"] {
      font-size: 1em;
    }
    .profile > span {
      text-align: center;
      font-size: 1.5em;
    }
    .profile > span > span {
      display: none;
    }
  }
</style>

<div class="profile">
  <img />
  <span class="nameBlock">
    Andrew
    <span>Jin-Meng</span>
    Wong
  </span>
  <div class="linkBlock">
    <a href="mailto:featherbear@navhaxs.au.eu.org">
      <span>
        <span>featherbear@navhaxs.au.eu.org</span>
      </span>
    </a>
    <a href="//linkedin.com/in/andrewjinmengwong">
      <span>
        <span>andrewjinmengwong</span>
      </span>
    </a>
    <a href="//facebook.com/andrewjinmengwong">
      <span>
        <span>andrewjinmengwong</span>
      </span>
    </a>
    <a href="//github.com/featherbear">
      <span>
        <span>github.com/featherbear</span>
      </span>
    </a>
    <a href="//instagram.com/_andrewjwong">
      <span>
        <span>@_andrewjwong</span>
      </span>
    </a>
  </div>
  <p>
    <a href="Andrew Jin-Meng Wong - Resume.pdf">view resume</a>
  </p>
</div>

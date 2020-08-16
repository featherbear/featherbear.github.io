<script>
  let emailElem;

  import { onMount } from "svelte";
  onMount(() => {
    let email = atob("aGVsbG9AZmVhdGhlcmJlYXIuY2M");
    emailElem.href += email;
    emailElem.querySelector("span span").innerText = email;
  });
</script>

<style lang="scss">
  /* Profile side pane */

  .profile {
    font: normal normal normal 16px Coves;
    background-color: rgba(255, 255, 255, 0.85);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;

    padding: 3vh 1vw;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;

    display: flex;
    flex-direction: column;

    &:hover {
      background-color: whitesmoke;
    }

    .picture {
      position: relative;

      &:after {
        content: "";
        display: block;
        padding-top: 100%;
      }

      img {
        border-radius: 50%;

        background-image: url(/assets/images/profilepic.jpg);
        background-size: cover;

        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    /* Name */

    .nameBlock {
      padding-top: 1.5rem;
      font-size: 4rem;
      display: list-item;
      font-weight: bold;
      line-height: 1.1rem;
      color: black;

      > span {
        font-size: 1rem;
        font-weight: normal;
        display: block;
        text-indent: 3rem;
        color: grey;
      }
    }

    .linkBlock {
      margin-top: 5vh;

      a {
        margin: 0.5vh auto;
        display: block;
        text-rendering: auto;
        color: dimgrey !important;

        > span {
          word-wrap: break-word;
          font-size: 1rem;
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

        &[href^="mailto:"] > span:before {
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
      font-size: 1rem;
    }
    .profile > span {
      text-align: center;
      font-size: 1.5rem;
    }
    .profile > span > span {
      display: none;
    }
  }
</style>

<div class="profile">
  <div class="picture">
    <img alt="" />
  </div>
  <span class="nameBlock">
    Andrew
    <span>Jin-Meng</span>
    Wong
  </span>
  <div class="linkBlock">
    <a bind:this={emailElem} href="mailto:">
      <span>
        <span />
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

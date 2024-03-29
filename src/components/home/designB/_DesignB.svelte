<script>
  import { onMount } from "svelte";

  import NameBlock from "../../NameBlock.svelte";

  let emailElem;
  onMount(() => {
    emailElem.href += atob("aGVsbG9AZmVhdGhlcmJlYXIuY2M");
  });

  let imageSet = (function () {
    /*
      Effect bits:
      0 - base
      1 - background blur
      2 - foreground blur
      4 - foreground unrotate
    */
    const backgroundImages = {
      "bg19-min.jpg": 0b010,
      'bg08-min.jpg': 0b010,
      '2022/IMG_4060_exp.jpg': 0b101,
    }
    
    let profileImages = [
      "bg17-min.jpg",
      "2022/0T4A9920.jpg",
      "2022/0T4A9896.jpg",
      "2022/20220413-0t4a9037_exp.jpg",
    ];

    const profileOverrides = {
      '2022/IMG_4060_exp.jpg': ["2022/0T4A9920.jpg", "2022/0T4A9896.jpg"]
    };

    let [background, backgroundOpts] = (function() {
      const keys = Object.entries(backgroundImages)
      return keys[Math.floor(Math.random() * keys.length)];
    })();
    
    if (profileOverrides[background]) {
      profileImages = profileOverrides[background];
    }

    let profile =
      profileImages[Math.floor(Math.random() * profileImages.length)];

    return {
      foreground: profile,
      background,
      backgroundOpts
    };
  })();

  function setBackgroundImage(elem) {
    elem.style.backgroundImage = `url(/assets/images/bg/${imageSet.background})`;
    
    if   (imageSet.backgroundOpts & 0b001) elem.setAttribute('blur', '')
    if   (imageSet.backgroundOpts & 0b010) elem.querySelector('.contentCover').setAttribute('blur', '')
    if (!(imageSet.backgroundOpts & 0b100)) elem.querySelector('.contentCover').setAttribute('rotated', '')
    
  }

  function setProfileImage(elem) {
    elem.style.backgroundImage = `url(/assets/images/bg/${imageSet.foreground})`;
  }
</script>

<meta
  name="viewport"
  content="width=device-width, initial-scale=1, user-scalable=no"
/>

<div id="container" use:setBackgroundImage>
  <div class="contentCover content">
    <section>
      <div class="nameBlockContainer">
        <NameBlock fullBlack={true} glow={true} />
      </div>
      <ul class="links">
        <li>
          <a href="about"> about </a>
        </li>
        <li>
          <a href="blog"> blog </a>
        </li>
        <li>
          <a href="programming"> portfolio </a>
        </li>
        <li>
          <a href="resume"> resume </a>
        </li>
      </ul>
      <ul class="socialLinks">
        <li>
          <a bind:this={emailElem} href="mailto:">
            <img alt="mail" src="/assets/icons/mail-squircle.svg" />
          </a>
        </li>
        <li>
          <a href="//linkedin.com/in/andrewjinmengwong">
            <img alt="linkedin" src="/assets/icons/linkedin-squircle.svg" />
          </a>
        </li>
        <li>
          <a href="//facebook.com/andrewjinmengwong">
            <img alt="facebook" src="/assets/icons/facebook-squircle.svg" />
          </a>
        </li>
        <li>
          <a href="//github.com/featherbear">
            <img alt="github" src="/assets/icons/code-squircle.svg" />
          </a>
        </li>
        <li>
          <a href="//instagram.com/_andrewjwong">
            <img alt="instagram" src="/assets/icons/instagram.svg" />
          </a>
        </li>
      </ul>
    </section>
    <section>
      <div class="profileImageContainer" use:setProfileImage />
    </section>
  </div>
</div>

<style lang="scss">
  :root {
    --border-radius: 10px;
  }
  div#container {
    font-size: 20px;

    /* TODO: Get rid of this ... */
    @media only screen and (max-width: 600px) {
      font-size: 18px;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(/assets/images/bg/bg19-min.jpg);
    background-position: center;
    background-size: cover;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;

    &::before {
      content: " ";
      background: linear-gradient(
        157deg,
        rgba(128, 185, 228, 1) 0%,
        rgba(93, 73, 145, 1) 100%
      );
      position: absolute;
      mix-blend-mode: hue;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      opacity: 0.1;
    }
    
    :global(&[blur]::before) {
      background: inherit !important;
      opacity: 1 !important;
      filter: blur(6px) !important;
      mix-blend-mode: revert !important;
      transform: scale(1.02) !important;
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > section:nth-child(1) {
      flex: 1;
      margin-left: 0.5em;
      padding: 1em;

      .nameBlockContainer {
        font-size: clamp(1em, 2vw, 1.5em);
        filter: invert(1);
        opacity: 0.9;
      }

      ul.links {
        margin: 0;
        margin-bottom: 1em;
        padding: 0;
        list-style-type: none;

        li {
          &:not(:last-child) {
            margin-bottom: 0.5em;
          }
          a {
            --colour: whitesmoke;
            color: var(--colour);

            position: relative;

            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 0.1em;
              background-color: var(--colour);
              opacity: 0;
              transition: opacity 300ms, transform 300ms;
            }

            &:hover,
            &:focus {
              &::after {
                opacity: 1;
                transform: translate3d(0, 0.2em, 0);
              }
            }
          }
        }
      }

      ul.socialLinks {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        padding: 0;
        // margin: 0;
        list-style-type: none;

        li {
          transition: transform 0.2s ease-in;

          &:hover {
            transform: translateY(-0.25em);
          }
        }

        img {
          width: 1.6em;
          height: 1.6em;

          aspect-ratio: 1;

          filter: invert(1);
        }
      }
    }

    > section:nth-child(2) {
      .profileImageContainer {
        background-image: url(/assets/images/bg/bg17-min.jpg);
        background-repeat: no-repeat;
        background-size: cover;

        background-position-x: center;

        border-top-left-radius: calc(2 * var(--border-radius));
        border-bottom-left-radius: calc(2 * var(--border-radius));

        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);

        height: 100%;
        width: clamp(120px, 25vw, 600px);

        //   aspect-ratio: 1;
      }
    }
  }

  .contentCover {
    width: clamp(320px, 75vw, 1024px);

    background: inherit;
    // isolation: isolate;

    box-shadow: 0;
    position: relative;
    z-index: 0;
    border-radius: var(--border-radius);

    :global(&[rotated]::before),
    :global(&[rotated]::after) {
      transform: rotate(180deg);
    }
    
    $filterValues: contrast(0.85) brightness(0.95);

    :global(&[blur]::before) {
      filter: blur(5px) $filterValues !important;
    }
    
    
    &::before,
    &::after {
      content: " ";
      position: absolute;
      background: inherit;
    }

    &::before {
      inset: 0;
      z-index: -1;
      border-radius: var(--border-radius);
      filter: $filterValues;
    }

    &::after {
      inset: 0;
      filter: blur(5px);
      z-index: -2;
    }
  }
</style>

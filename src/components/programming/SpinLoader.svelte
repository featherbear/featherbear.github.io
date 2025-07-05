<span class="loader" />

<style>
  /* https://cssloaders.github.io/ */
  :root {
    --spin-color: #507099;
  }
  .loader {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    color: var(--spin-color);
    left: -100px;
    box-sizing: border-box;
    animation: shadowRolling 2s linear infinite;
    place-self: center;
  }

  @keyframes shadowRolling {
    0% {
      box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    12% {
      box-shadow: 100px 0 var(--spin-color), 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 110px 0 var(--spin-color), 100px 0 var(--spin-color),
        0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    36% {
      box-shadow: 120px 0 var(--spin-color), 110px 0 var(--spin-color),
        100px 0 var(--spin-color), 0px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 130px 0 var(--spin-color), 120px 0 var(--spin-color),
        110px 0 var(--spin-color), 100px 0 var(--spin-color);
    }
    62% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--spin-color),
        120px 0 var(--spin-color), 110px 0 var(--spin-color);
    }
    75% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        130px 0 var(--spin-color), 120px 0 var(--spin-color);
    }
    87% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        200px 0 rgba(255, 255, 255, 0), 130px 0 var(--spin-color);
    }
    100% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
    }
  }
</style>

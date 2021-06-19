<script>
  import NameBlock from "../../components/NameBlock.svelte";
  import ProfileContainer from "../../components/resume/ProfileContainer/ProfileContainer.svelte";
  import Timeline from "../../components/Timeline";
  import data from "../../components/Timeline/data";
  import aboutText from "../../data/aboutText";
  import Button from "../../components/Button.svelte"
</script>

<div id="container">
  <ProfileContainer />
  <Timeline {data} preContent={aboutText} />
  <p class="noprint" style="text-align: center">
    <Button href="resume/pdf" openInNewTab={true}>Download as PDF</Button>
    <Button href="resume/full">View complete resume</Button>
  </p>
</div>

<div class="nameBlockContainer">
  <NameBlock rightAlign={true} />
</div>

<div class="randomPrintLine" />

<style lang="scss">
  #container {
    padding: 0px 10px;
    user-select: none;
  }

  .randomPrintLine {
    border-right: 5px solid black;
    top: 0;
    right: 0;
    position: fixed;
    bottom: 0;
    visibility: hidden;
  }

  .nameBlockContainer {
    position: absolute;
    right: 10px;
    top: 0;
    transform: scale(1.3);
    transform-origin: top right;
    visibility: hidden;
  }

  @media print {
    .randomPrintLine {
      visibility: visible;
    }
    .nameBlockContainer {
      visibility: visible;
    }
  }
</style>

<script>
  import LinkEntry from "./LinkEntry.svelte";
  import ProfilePanel from "./ProfilePanel.svelte";
  import BackgroundLoop from "./BackgroundLoop.svelte";
</script>

<BackgroundLoop>
  <ProfilePanel />

  <div id="sections">
    <LinkEntry href="blog">Blog</LinkEntry>
    <LinkEntry href="about">About Me</LinkEntry>
    <LinkEntry href="https://www.instagram.com/_andrewjwong/"
      >Photography</LinkEntry
    >
    <LinkEntry href="programming">Programming</LinkEntry>
  </div>
</BackgroundLoop>

<style>
  #sections {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 50px;
  }
</style>

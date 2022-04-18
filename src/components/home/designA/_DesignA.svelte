<script>
  import LinkEntry from "./LinkEntry.svelte";
  import ProfilePanel from "./ProfilePanel.svelte";
  import BackgroundLoop from "./BackgroundLoop.svelte";
</script>

<BackgroundLoop>
  <div style="z-index: 1; position: absolute; top: 0; left: 0; right: 0; text-align: center; font-size: 0.8em; color: white">
    <p>Wow, there was like a 1% chance to visit this (old) version of my site!</p>
    <p>Refresh the page a few times to see the latest version</p>
  </div> 

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

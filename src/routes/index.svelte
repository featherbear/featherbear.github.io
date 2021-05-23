<script>
  import LinkEntry from "../components/home/LinkEntry.svelte";
  import ProfilePanel from "../components/home/ProfilePanel.svelte";
  import BackgroundLoop from "../components/home/BackgroundLoop.svelte";
</script>

<style>
  #sections {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 50px;
  }
</style>

<svelte:head>
  <title>Andrew Wong | featherbear</title>
</svelte:head>

<BackgroundLoop>
  <ProfilePanel />

  <div id="sections">
    <LinkEntry href="blog">Blog</LinkEntry>
    <LinkEntry href="about">About Me</LinkEntry>
    <LinkEntry href="https://www.instagram.com/_andrewjwong/">Photography</LinkEntry>
    <LinkEntry href="programming">Programming</LinkEntry>
  </div>
</BackgroundLoop>

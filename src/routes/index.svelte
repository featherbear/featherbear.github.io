<script>
  import LinkEntry from "../components/home/LinkEntry.svelte";
  import ProfilePanel from "../components/home/ProfilePanel.svelte";
</script>

<style>
  #sections {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>

<svelte:head>
  <title>Andrew Wong | featherbear</title>
</svelte:head>

<ProfilePanel />

<div id="sections">
  <LinkEntry href="blog">Blog</LinkEntry>
  <LinkEntry href="about">About Me</LinkEntry>
  <LinkEntry href="photos">Photography</LinkEntry>
  <LinkEntry href="programming">Programming</LinkEntry>
</div>

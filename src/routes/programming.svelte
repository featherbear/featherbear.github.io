<script>
  import Section from "../components/programming/Section.svelte";
  import Project from "../components/programming/Project.svelte";

  import fetch from "node-fetch";

  import data from "../data/programming.json";
  const gitHubData = () =>
    fetch("https://api.github.com/users/featherbear/repos?sort=pushed")
      .then((r) => r.json())
      .then((j) => j.filter((json) => !json.fork))
      .catch(() => {});
</script>

<Section title="TL;DR">
  I've made quite a few things, and have also abandoned things. What's recently
  caught my eye is Svelte - a Javascript framework that has a much lighter
  footprint than React. My interest in programming lies in things related to
  security, multimedia, and communication. Not so interested in Machine Learning
  / Artifical Intelligence - it's just a bunch of fancy if statements.
</Section>

{#each data as section}
  <Section title={section.title}>
    {#if section.items}
      {#each section.items as entry}
        <Project
          title={entry.title}
          description={entry.description}
          image={entry.image}
          preview={entry.preview}
          repo={entry.repo}
          site={entry.site}
          blog={entry.blog}
          stack={entry.stack} />
      {/each}
    {/if}
  </Section>
{/each}

<Section title="An invalid metric of my programming life">
  <img
    alt="github stats"
    src="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord" />

  {#await gitHubData()}
    <!-- <p>...waiting</p> -->
  {:then json}
    {#if json}
    <div>Recent Activity</div>
    {#each json.slice(0, 10) as repo}
      <br />
      <a href={repo.html_url}>{repo.full_name}</a>
      <i>{repo.description}</i>
      {#if repo.homepage}
        <a href={repo.homepage}>[Site]</a>
      {/if}
    {/each}
    {/if}
  {:catch error}
    <!-- <p style="color: red">{error.message}</p> -->
  {/await}
</Section>

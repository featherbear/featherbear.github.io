<script>
  import Section from "../components/programming/Section.svelte";
  import Project from "../components/programming/Project.svelte";

  // import fetch from "node-fetch";
  
  import _data from "../data/programming.hjson";

  /* Modify the data to order it by <hasImageOrPreview>, <Name> */
  async function generateData() {
    for (let category of _data) {
      if (category.items) {
        category.items.sort((a, b) => {
          let bHasMedia = !!(b.image || b.preview);
          let aHasMedia = !!(a.image || a.preview);
          if (aHasMedia != bHasMedia) return bHasMedia - aHasMedia;
          return b.title < a.title;
        });
      }
    }

    return _data;
  }
  

  // const gitHubData = () =>
  //   fetch("https://api.github.com/users/featherbear/repos?sort=pushed")
  //     .then((r) => r.json())
  //     .then((j) => j.filter((json) => !json.fork))
  //     .catch(() => {});
</script>

<h4>TL;DR</h4>
<p>
  My interest in programming lies in things related to security, multimedia, and
  communication.
</p>
<hr />

{#await generateData() then data}
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
{/await}

<h4>An invalid metric of my programming life</h4>
<img
  alt="github stats"
  style="width: 100%; max-width: 400px;"
  src="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord" />
<!-- 
{#await gitHubData()}
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
{/await} -->

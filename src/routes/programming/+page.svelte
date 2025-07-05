<script>
  import Section from "../../components/programming/Section.svelte";
  import Project from "../../components/programming/Project.svelte";

  import _data from "../../data/programming.json5";

  import Fa from 'svelte-fa'
  import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'

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

<p>
  My interest in programming lies in things related to multimedia, security and communications.
</p>

<div class="githubBlock">
  <a href="https://github.com/featherbear"><Fa icon={faGithubSquare} size="2x" /> <span>github.com/featherbear</span></a>
</div>

<hr />

{#await generateData() then data}
  {#each data as section}
    <div class="sectionContainer">
      <Section title={section.title}>
        {#if section.items}
          {#each section.items as entry}
            <Project data={entry} />
          {/each}
        {/if}
      </Section>
    </div>
  {/each}
{/await}

<h4>An invalid metric of my programming life</h4>
<img
  alt="github stats"
  style="width: 100%; max-width: 400px;"
  src="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord"
/>

<style lang="scss">
  div.sectionContainer {
    &:not(:nth-of-type(1)) {
      margin-top: 2em;
    }
  }

  div.githubBlock a {
    display: inline-flex;
    flex-direction: row;
    place-items: center;
    gap: 0.5rem;
  }
</style>

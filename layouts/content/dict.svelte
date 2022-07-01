<script>
    import { getDictionary } from "../scripts/get_dictionary.svelte";

    export let allContent;

    const dict = getDictionary(allContent)
</script>

<h1>Dictionary</h1>

<p>
  This is a dictionary of words and their translations used throughout this website.
</p>


<div style="margin-bottom: 10px;" class="bold-childs inline-outer-div">
  <div class="inline-div">Chinese Characters</div>
  <div class="inline-div">Translation</div>
  <div class="inline-div">Jyutping</div>
  <div class="inline-div">Pinyin</div>
</div>
{#each Object.keys(dict) as key}
  <div class="inline-outer-div">
    <div class="inline-div">{key}</div>
    <div class="inline-div">{dict[key].translation}</div>
    <div class="inline-div">{dict[key].jyutping}</div>
    <div class="inline-div">{dict[key].pinyin}</div>
  </div>
{/each}

<!-- a go back button / anchor -->
<div style="margin-top: 30px;">
  <a href="#top">Go Back</a>
</div>

<style>
  .inline-outer-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .inline-div {
    /* display: inline-block; */
    width: 200px;
  }

  .bold-childs {
    font-weight: bold;
  }
</style>

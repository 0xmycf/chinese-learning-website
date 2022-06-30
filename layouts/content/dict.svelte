<script>
    export let allContent;

    const dictEntries = allContent.filter(entry => entry.type === 'dict')[0];
      /* const dictEntries = { */
      /*     "fields": { */
      /*         "\u4f60\u597d": { */
      /*             "text": "\u4f60\u597d", */
      /*             "translation": "Hello", */
      /*             "jyutping": "Nei5 Hou2", */
      /*             "pinyin": "Ni Hau" */
      /*         }, */
      /*         "\u5927\u5bb6\u597d": { */
      /*             "text": "\u5927\u5bb6\u597d", */
      /*             "translation": "Hello Everyone", */
      /*             "jyutping": "Daai6 Gaa1 Hou2", */
      /*             "pinyin": "Dai ... Hau" */
      /*         } */
      /*       } */
      /*   }; */

    const dict = dictEntries.fields;
</script>

<h1>Dictionary</h1>

<p>
  This is a dictionary of words and their translations used throughout this website.
</p>


<div style="margin-bottom: 10px;" class="bold-childs">
  <div class="inline-div">Chinese Characters</div>
  <div class="inline-div">Translation</div>
  <div class="inline-div">Jyutping</div>
  <div class="inline-div">Pinyin</div>
</div>
{#each Object.keys(dict) as key}
  <div>
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
  .inline-div {
    display: inline-block;
    width: 200px;
  }

  .bold-childs {
    font-weight: bold;
  }
</style>

<script>
    /* export let text, translation, allContent; */
    export let key, dict;
    
    /* const dictEntries = allContent.filter(entry => entry.type === 'dict')[0]; */
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
    /* const dict = dictEntries.fields; */

    const text = key
    const translation = dict[key].translation
    let content = text;

    let onHover = () => {
        content = content === text ? translation : text
      }

    let mapTextToTranslation = (text) => {
        allContent.forEach(content => {
            if (content.type === "dictionary") {
                return content.translation
            }
        })
      }
</script>

<div>
  <p on:mouseenter={onHover} on:mouseleave={onHover}> 
    { content }
  </p>
  <!--
  <p>
    {#each allContent as content}
      {#if content.type == "dictionary"}
        {content.path}
      {/if}
    {/each}
  </p>
  -->
</div>


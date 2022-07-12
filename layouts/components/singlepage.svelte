<script>
    import Chinesetext from "../components/chinesetext.svelte";
    import { getDictionary } from "../scripts/get_dictionary.svelte";

    /*
      Header: The header of the page
      Body: The body of the page (there are no subheaders currently)
      langauge: The langauge ('mandarin', 'cantonese')
      allContent: The allContent prop form plenti
    */
    export let Header, Body, language, allContent;

    const dict = getDictionary(allContent);
    const isChinese = (text) => /[\u4E00-\u9FA5]/.test(text);

    let isCantonese, isMandarin;
      switch(language){
          case 'mandarin':
            isMandarin = true;
            break;
          case 'cantonese':
            isCantonese = true;
            break;
          default:
            isMandarin  = false;
            isCantonese = false;
            break;
        }
</script>

<div>

  <h1>{Header}</h1>

  {#each Body as {text, jyutping, pinyin, translation, traditional, simplified} }
    {#if isChinese(text)}
      <!--
        Sometimes the text contains sentences which need to be translated,
        such sentences wont be in the dictionary, hence
        a custom entry is used in the yaml/json directly
      -->
      {#if typeof jyutping !== 'undefined'}
        <Chinesetext key={text} {dict} {isMandarin} {isCantonese} custom={
                       {
                         traditional: traditional,
                         simplified: simplified,
                         translation: translation,
                         pinyin: pinyin,
                         jyutping: jyutping,
                       }
                     } />
      {:else}
        <Chinesetext key={text} {dict} {isMandarin} {isCantonese} />
      {/if}
    {:else}
      <p>{@html text}</p>
    {/if}
  {/each}
</div>

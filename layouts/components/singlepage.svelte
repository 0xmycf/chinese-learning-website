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

    let cantonese, mandarin; 
      switch(language){
          case 'mandarin':
            mandarin = true;
            break;
          case 'cantonese':
            cantonese = true;
            break;
          default:
            mandarin  = false;
            cantonese = false;
            break;
        }
    /*
      TODO:
        - scrollbars
        - individual scrolling of the singlepages (this might be the task of the doublepage)
    */
</script>

<div>

  <h1>{Header}</h1>

  {#each Body as {text}}
    {#if isChinese(text)}
      <Chinesetext key={text} {dict} {mandarin} {cantonese} />
    {:else}
      <p>{@html text}</p>
    {/if}
  {/each}

</div>

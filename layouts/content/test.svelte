<script>
    import Chinesetext from "../components/chinesetext.svelte";

    export let Header, Body, allContent;
    const dictEntries = allContent.filter(entry => entry.type === 'dict')[0];
    const dict = dictEntries.fields;

    /* let replaceCodewords = (html) => { */
    /*     if (typeof Codes === "undefined" || typeof Codes === null) { */
    /*         return html; */
    /*     } */
    /*     Object.keys(Codes).forEach(key => { */
    /*         // replace codewords (key) in html with Codes[codewords].text */
    /*         html = html.replace(new RegExp(key, 'g'), Codes[key].text); */
    /*     }); */
    /*     return html; */
    /*   }; */

    let isChinese = (text) => /[\u4E00-\u9FA5]/.test(text);
</script>

<h1>{Header}</h1>

{#each Body as {text, translation}}
  {#if translation !== undefined}
    <!--
    <Chinesetext {text} {translation} />
    -->
    <Chinesetext key={text} {dict}/>
  {:else}
    <p>{@html text}</p>
  {/if}
{/each}


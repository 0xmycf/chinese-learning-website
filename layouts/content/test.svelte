<script>
    import Chinesetext from "../components/chinesetext.svelte";

    export let Header, Body, Codes;

    let replaceCodewords = (html) => {
        if (typeof Codes === "undefined" || typeof Codes === null) {
            return html;
        }
        Object.keys(Codes).forEach(key => {
            // replace codewords (key) in html with Codes[codewords].text
            html = html.replace(new RegExp(key, 'g'), Codes[key].text);
        });
        return html;
      };
</script>

<h1>{Header}</h1>

{#each Body as {text, translation}}
  {#if translation !== undefined}
    <Chinesetext {text} {translation} />
  {:else}
    <p>{@html replaceCodewords(text)}</p>
  {/if}
{/each}


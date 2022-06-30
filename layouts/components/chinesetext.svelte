<script>
    export let key, dict, mandarin, cantonese;
    const word = dict[key];
    
    const text = key;
    const translation = word.translation;
    let content = text;

    const onHover = () => {
        content = content === text ? translation : text
      };
</script>

<div>
  <p on:mouseenter={onHover} on:mouseleave={onHover}> 
    { content }
  </p>
  <p>
    {#if mandarin}
      { word.pinyin }
    {:else if cantonese}
      { word.jyutping }
    {:else}
      No romantisation given
    {/if}
  </p>
  <!-- 
    In the future this will also display the jyutping and the pinyin beneath,
      as well as support multiple texts next to each other

    TODO: make sure the text doesnt move when hovering over this element
  -->
</div>


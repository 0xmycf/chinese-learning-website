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

<div class="chinese-div">
  <p class="chinese-text" on:mouseenter={onHover} on:mouseleave={onHover}> 
    { content }
  </p>
  <p class="roman-text">
    {#if mandarin}
      { word.pinyin }
    {:else if cantonese}
      { word.jyutping }
    {:else}
      No romantisation given
    {/if}
  </p>
  <!-- 
    TODO: make sure the text doesnt move when hovering over this element
  -->
</div>

<style>
  .chinese-div {
    display: flex;
    flex-direction: column;
    justify-content: left;
    /* align-items: center; */
    font-size: 1rem;
    font-weight: 300;
    color: #333;
    margin: 1rem 0;
    min-width: 460px;
    min-height: 90px;
  }

  .chinese-text {
    font-family: 'Noto Sans TC', sans-serif;
    margin-bottom: 0.5rem;
    min-height: 23px;
  }

  .roman-text {
    margin-top: 0.5rem;
  }
</style>


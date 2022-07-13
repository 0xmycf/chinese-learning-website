<script>
    export let key, dict, isMandarin, isCantonese, custom;

    const word = (typeof custom === 'undefined') ? dict[key] : custom;

    const text = (isCantonese || typeof word.simplified === 'undefined') ? key : word.simplified;
    const translation = word.translation

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
    {#if isMandarin}
      { word.pinyin }
    {:else if isCantonese}
      { word.jyutping }
    {:else}
      None given.
    {/if}
  </p>
</div>

<style>
  .chinese-div {
    display: flex;
    flex-direction: column;
    justify-content: left;
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

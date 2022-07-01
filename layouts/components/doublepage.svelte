<script>
  import Singlepage from "./singlepage.svelte";

  export let header, bodyone, bodytwo, mandarin, cantonese, allContent;
</script>

<div>
  <!-- This makes sure always one site is displayed, even though nothing is checked -->
  {#if cantonese || (!mandarin && !cantonese)}
    <div class="single-page">
      <Singlepage
        Header={header}
        Body={bodyone}
        allContent={allContent}
        language="cantonese"
      />
    </div>
  {/if}
  
  <!-- We only need the boarder if both are displayed -->
  {#if mandarin && cantonese}
    <div class="div-boarder"></div>
  {/if}

  <!-- Mandarin also gets a comment so its not lonely -->
  {#if mandarin}
    <div class="single-page">
      <Singlepage
          Header={header}
          Body={bodytwo}
          allContent={allContent}
          language="mandarin"
      />
    </div>
  {/if}
</div>

<style>
  /* The divs elements should be displayed next to each other,
   and take up the same amount of space */
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .single-page {
    padding-left: 1em;
    padding-right: 1em;
  }

  .div-boarder {
    width: 0;
    border-left-style: solid;
    opacity: 0.2;
    /*
       this is not optimal, but it will work for now
       ideally, I would want this directly aligned to the text/header
       of the content divs
    */
    margin-top: 1.8em;
  }

</style>

<script>
  import Singlepage from "./singlepage.svelte";

  export let header, bodyone, bodytwo, allContent;
</script>

<div>
  <div class="single-page">
    <Singlepage
      Header={header}
      Body={bodyone}
      allContent={allContent}
      language="cantonese"
    />
  </div>

  <div class="div-boarder"></div>


  <div class="single-page">
    <Singlepage
        Header={header}
        Body={bodytwo}
        allContent={allContent}
        language="mandarin"
    />
  </div>

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

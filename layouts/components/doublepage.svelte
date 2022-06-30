<script>
  import Singlepage from "./singlepage.svelte";

  export let headerone, headertwo, bodyone, bodytwo, allContent;
</script>

<div>
  <Singlepage
      Header={headerone}
      Body={bodyone}
      allContent={allContent}
      language="cantonese"
  />


  <Singlepage
      Header={headertwo}
      Body={bodytwo}
      allContent={allContent}
      language="mandarin"
  />
</div>


<style>
  /* The divs elemnts should be displayed next to each other,
   and take up the same amount of space */
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

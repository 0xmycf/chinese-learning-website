<script>
    export let text, translation;
    
    let show = false;

    let onHover = () => {
        show = !show;
        console.log(translation);
      }
</script>

<div
  on:mouseenter={onHover}
  on:mouseleave={onHover}> 
    { text }
</div>

{#if show}
  <p>
    Show is set to {show}
  </p>
{/if}

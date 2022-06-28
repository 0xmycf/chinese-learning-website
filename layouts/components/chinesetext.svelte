<script>
    export let text, translation;
    
    let show = false;
    let content = text;

    let onHover = () => {
        content = content === text ? translation : text
      }
</script>

<div
  on:mouseenter={onHover}
  on:mouseleave={onHover}> 
    { content }
</div>


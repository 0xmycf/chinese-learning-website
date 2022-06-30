<script>
    export let text, translation;
    
    let content = text;

    let onHover = () => {
        content = content === text ? translation : text
      }
</script>

<p
  on:mouseenter={onHover}
  on:mouseleave={onHover}> 
    { content }
</p>


<script>
	export let title, intro, allContent;
</script>

<h1>{title}</h1>

<section id="intro">
	{#each intro as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</section>

<div class="test-div">
  {#each allContent as content}
    {#if content.type === 'dict' ||  content.type === 'grammar'}
      <a class="blue-on-hover" href={content.path}>To: {content.path}</a>
    {/if}
  {/each}
</div>

<style>
  .test-div {
    display: flex;
    flex-direction: column;
  }

  a {
    transition: all 0.3s ease 0s;
  }

  .blue-on-hover:hover {
    /* color: rgb(161, 265, 255); */
    color: var(--primary);
  }
</style>

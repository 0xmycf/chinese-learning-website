<script>
	export let title, intro, allContent;
</script>

<h1>{title}</h1>

<section id="intro">
	{#each intro as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</section>

{#each allContent as content}
  {#if content.type === 'dict' ||  content.type === 'test'}
    <a href={content.path}>To: {content.path}</a>
  {/if}
{/each}

<style>
  a {
    display: block;
  }
</style>

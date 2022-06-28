<script>
	export let title, intro;
</script>

<h1>{title}</h1>

<section id="intro">
	{#each intro as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</section>

<a href="./test/lorem">To Lorem</a>
<a href="./test/ipsum">To Ipsum</a>


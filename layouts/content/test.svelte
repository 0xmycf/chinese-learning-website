<script>
    export let Header, Body;
</script>

<h1>{Header}</h1>

{#each Body as body}
    <p>{@html body}</p>
{/each}

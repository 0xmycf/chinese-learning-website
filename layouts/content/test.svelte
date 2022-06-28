<script>
    import Chinesetext from "../components/chinesetext.svelte";

    export let Header, Body;
</script>

<h1>{Header}</h1>

{#each Body as body}
    <p>{@html body}</p>
{/each}

<Chinesetext text="Nei5Hou2" translation="Hello"/>


<script>
    import Doublepage from "../components/doublepage.svelte";

    export let Header, BodyCanto, BodyMand, allContent;

</script>

<Doublepage
    header={Header}
    bodyone={BodyCanto}
    bodytwo={BodyMand}
    allContent={allContent}
/>

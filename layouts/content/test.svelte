<script>
    import Doublepage from "../components/doublepage.svelte";
    import { getDictionary } from "../scripts/get_dictionary.svelte";

    export let Header, Body, allContent;

    const dict = getDictionary(allContent);
    const isChinese = (text) => /[\u4E00-\u9FA5]/.test(text);
</script>

<Doublepage
    headerone={Header}
    headertwo={Header}
    bodyone={Body}
    bodytwo={Body}
    allContent={allContent}
/>

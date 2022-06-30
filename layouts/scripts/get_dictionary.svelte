<script context="module">
  export const getDictionary = (allContent) => {
    const dictEntries = allContent.filter(entry => entry.type === 'dict')[0];
    const dict = dictEntries.fields;
    return dict;
  }
</script>

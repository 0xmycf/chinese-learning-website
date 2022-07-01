<script>
    import Doublepage from "../components/doublepage.svelte";

    export let Header, BodyCanto, BodyMand, allContent;

    let choosenLangs = [
          'Cantonese',
          /* 'Mandarin', */
        ]
    const langaugeOptions = [
          'Cantonese',
          'Mandarin',
        ]

    $: langPkg = choosenLangs.reduce((acc, val) => {
        const val1 = val.toLowerCase();
        return {
            ...acc,
            [val1] : val,
          }
      }, {});
</script>

<div class="label-wrapper">
  {#each langaugeOptions as lang}
    <div class="inner-wrapper">
      <input type="checkbox" bind:group={choosenLangs} name="choosen-langs" id={"choosen-" + lang} value={lang} />
      <label for={"choosen-" + lang}>
        {lang}
      </label>
    </div>
  {/each}
</div>

<Doublepage
    header={Header}
    bodyone={BodyCanto}
    bodytwo={BodyMand}
    allContent={allContent}
    {...langPkg}
/>

<style>
  .inner-wrapper {
    padding-left: 1em;
  }

  input {
    transform: scale(0.8);
  }

  .label-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    font-size: 0.8em;
  }
</style>

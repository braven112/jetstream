<script>
// @ts-nocheck

  import setAttribute from "$lib/setAttribute";
  import '@aurodesignsystem/auro-hyperlink';

  export let href = undefined;
  export let cta = undefined;
  export let secondary = undefined;
  export let target = undefined;
  export let ondark = undefined;
  export let slot = undefined;
</script>

<auro-hyperlink
  use:setAttribute={{attr: 'href', val: href}}
  use:setAttribute={{attr: 'cta', val: cta}}
  use:setAttribute={{attr: 'secondary', val: secondary}}
  use:setAttribute={{attr: 'target', val: target}}
  use:setAttribute={{attr: 'ondark', val: ondark}}
  use:setAttribute={{attr: 'slot', val: slot}}
  >
  <slot></slot>
</auro-hyperlink>
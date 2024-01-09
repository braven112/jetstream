<script>
// @ts-nocheck

  import setAttribute from "$lib/setAttribute";
  import '@aurodesignsystem/auro-hyperlink';

  export let href = undefined;
  export let cta = undefined;
</script>

<auro-hyperlink
  use:setAttribute={{attr: 'href', val: href}}
  use:setAttribute={{attr: 'cta', val: cta}}
  >
  <slot></slot>
</auro-hyperlink>
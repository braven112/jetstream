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
  export let nav = undefined;
  export let relative = undefined;
  export let role = undefined;
</script>

<auro-hyperlink
  use:setAttribute={{attr: 'href', val: href}}
  use:setAttribute={{attr: 'cta', val: cta}}
  use:setAttribute={{attr: 'secondary', val: secondary}}
  use:setAttribute={{attr: 'target', val: target}}
  use:setAttribute={{attr: 'ondark', val: ondark}}
  use:setAttribute={{attr: 'slot', val: slot}}
  use:setAttribute={{attr: 'nav', val: nav}}
  use:setAttribute={{attr: 'relative', val: relative}}
  use:setAttribute={{attr: 'role', val: role}}
  >
  <slot></slot>
</auro-hyperlink>
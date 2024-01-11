<script>
// @ts-nocheck

  import '@aurodesignsystem/auro-accordion';
  import setAttribute from "$lib/setAttribute";

  export let emphasis = undefined;
</script>

<auro-accordion-group
  use:setAttribute={{attr: 'emphasis', val: emphasis}}
  >
  <slot></slot>
</auro-accordion-group>
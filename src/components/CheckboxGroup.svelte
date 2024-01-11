<script>
  // @ts-nocheck

  import setAttribute from "$lib/setAttribute";
  import '@aurodesignsystem/auro-checkbox/dist/auro-checkbox__bundled';

  export let disabled = undefined;
</script>

<auro-checkbox-group
  use:setAttribute={{attr: 'disabled', val: disabled}}
  >
  <slot></slot>
  <slot name="legend"></slot>
</auro-checkbox-group>
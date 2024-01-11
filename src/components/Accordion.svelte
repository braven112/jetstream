<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-accordion';

  export let key = undefined;
</script>

<auro-accordion
  use:setAttribute={{attr: 'emphasis', val: key}}
>
  <slot name="trigger"></slot>
  <slot></slot>
</auro-accordion>
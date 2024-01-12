<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-datepicker';

  export let range = undefined;
</script>

<auro-datepicker
  use:setAttribute={{attr: 'range', val: range}}
  >
  <slot></slot>
  <slot name="fromLabel"></slot>
  <slot name="toLabel"></slot>
  <slot name="mobileDateLabel"></slot>
</auro-datepicker>

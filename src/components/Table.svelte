<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-table';

  export let columnHeaders = undefined;
  export let componentData = undefined;
  export let nowrap = undefined;
</script>

<auro-table
  use:setAttribute={{attr: 'columnHeaders', val: columnHeaders}}
  use:setAttribute={{attr: 'componentData', val: componentData}}
  use:setAttribute={{attr: 'nowrap', val: nowrap}}
  >
  <slot></slot>
</auro-table>

<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-button';
  import '@aurodesignsystem/auro-icon';

  export let customColor = undefined;
  export let category = undefined;
  export let name = undefined;
  export let isSlot = undefined;
  export let slotName = undefined;
</script>

<auro-icon
  use:setAttribute={{attr: 'customColor', val: customColor}}
  use:setAttribute={{attr: 'category', val: category}}
  use:setAttribute={{attr: 'name', val: name}}
  use:setAttribute={{attr: 'slot', val: isSlot ? slotName : undefined}}
></auro-icon>
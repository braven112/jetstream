<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@alaskaairux/auro-popover';

  export let addSpace = undefined;
  export let removeSpace = undefined;
  export let disabled = undefined;
  export let placement = undefined;
  export let trigger = undefined;

</script>

<auro-popover
  use:setAttribute={{attr: 'addSpace', val: addSpace}}
  use:setAttribute={{attr: 'removeSpace', val: removeSpace}}
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'placement', val: placement}}
  use:setAttribute={{attr: 'trigger', val: trigger}}
  >
  <slot></slot>
</auro-popover>

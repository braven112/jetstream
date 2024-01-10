<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-pane';

  export let sm = undefined;
  export let ariaHidden = undefined;
  export let date = undefined;
  export let disabled = undefined;
  export let price = undefined;
  export let selected = undefined;
  export let tabIndex = undefined;
  export let style = undefined;

</script>

<auro-pane
  use:setAttribute={{attr: 'sm', val: sm}}
  use:setAttribute={{attr: 'ariaHidden', val: ariaHidden}}
  use:setAttribute={{attr: 'date', val: date}}
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'price', val: price}}
  use:setAttribute={{attr: 'selected', val: selected}}
  use:setAttribute={{attr: 'tabIndex', val: tabIndex}}
  use:setAttribute={{attr: 'style', val: style}}
  >
  <slot></slot>
</auro-pane>

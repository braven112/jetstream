<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-menu';

  export let disabled = undefined;
  export let matchWord = undefined;
  export let nocheckmark = undefined;
  export let optionActive = undefined;
  export let optionSelected = undefined;
  export let ready = undefined;
  export let value = undefined;
  export let style = undefined;
  export let id = undefined;
</script>

<auro-menu
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'matchWord', val: matchWord}}
  use:setAttribute={{attr: 'nocheckmark', val: nocheckmark}}
  use:setAttribute={{attr: 'optionActive', val: optionActive}}
  use:setAttribute={{attr: 'optionSelected', val: optionSelected}}
  use:setAttribute={{attr: 'ready', val: ready}}
  use:setAttribute={{attr: 'value', val: value}}
  use:setAttribute={{attr: 'style', val: style}}
  use:setAttribute={{attr: 'id', val: id}}
  >
  <slot></slot>
</auro-menu>

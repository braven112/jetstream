<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-button';
  import '@aurodesignsystem/auro-icon';

  export let customColor = undefined;
  export let customSize = undefined;
  export let category = undefined;
  export let name = undefined;
  export let part = undefined;
  export let label = undefined;
  export let ondark = undefined;
  export let emphasis = undefined;
  export let accent = undefined;
  export let disabled = undefined;
  export let error = undefined;
  export let success = undefined;
  export let advisory = undefined;
  export let style = undefined;
  export let tabindex = undefined;
  export let ariaHidden = undefined;
</script>

<auro-icon
  use:setAttribute={{attr: 'customColor', val: customColor}}
  use:setAttribute={{attr: 'customSize', val: customSize}}
  use:setAttribute={{attr: 'category', val: category}}
  use:setAttribute={{attr: 'name', val: name}}
  use:setAttribute={{attr: 'part', val: part}}
  use:setAttribute={{attr: 'label', val: label}}
  use:setAttribute={{attr: 'ondark', val: ondark}}
  use:setAttribute={{attr: 'emphasis', val: emphasis}}
  use:setAttribute={{attr: 'accent', val: accent}}
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'error', val: error}}
  use:setAttribute={{attr: 'success', val: success}}
  use:setAttribute={{attr: 'advisory', val: advisory}}
  use:setAttribute={{attr: 'style', val: style}}
  use:setAttribute={{attr: 'tabindex', val: tabindex}}
  use:setAttribute={{attr: 'aria-hidden', val: ariaHidden}}
>
</auro-icon>
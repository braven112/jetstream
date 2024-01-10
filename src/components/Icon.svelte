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
  export let style = undefined;
</script>

<auro-icon
  use:setAttribute={{attr: 'customColor', val: customColor}}
  use:setAttribute={{attr: 'customSize', val: customSize}}
  use:setAttribute={{attr: 'category', val: category}}
  use:setAttribute={{attr: 'name', val: name}}
  use:setAttribute={{attr: 'part', val: part}}
  use:setAttribute={{attr: 'style', val: style}}
>
</auro-icon>
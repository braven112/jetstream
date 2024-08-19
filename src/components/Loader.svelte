<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-loader';

  export let lg = undefined;
  export let ondark = undefined;
  export let md = undefined;
  export let onlight = undefined;
  export let pulse = undefined;
  export let sm = undefined;
  export let white = undefined;
  export let xl = undefined;
  export let xs = undefined;
  export let xxs = undefined;
  export let laser = undefined;
  export let orbit = undefined;
  export let ringworm = undefined;
  export let style = undefined;
</script>

<auro-loader
  use:setAttribute={{attr: 'lg', val: lg}}
  use:setAttribute={{attr: 'ondark', val: ondark}}
  use:setAttribute={{attr: 'md', val: md}}
  use:setAttribute={{attr: 'onlight', val: onlight}}
  use:setAttribute={{attr: 'pulse', val: pulse}}
  use:setAttribute={{attr: 'sm', val: sm}}
  use:setAttribute={{attr: 'white', val: white}}
  use:setAttribute={{attr: 'xl', val: xl}}
  use:setAttribute={{attr: 'xs', val: xs}}
  use:setAttribute={{attr: 'xxs', val: xxs}}
  use:setAttribute={{attr: 'laser', val: laser}}
  use:setAttribute={{attr: 'orbit', val: orbit}}
  use:setAttribute={{attr: 'ringworm', val: ringworm}}
  use:setAttribute={{attr: 'style', val: style}}
  >
  <slot></slot>
</auro-loader>

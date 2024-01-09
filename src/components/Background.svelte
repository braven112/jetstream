<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';

  import 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-background@latest/dist/auro-background__bundled.js';

  export let bg = undefined;
</script>

<auro-background
  use:setAttribute={{attr: 'bg', val: bg}}
>
  <slot></slot>
</auro-background>

<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';

  import '@aurodesignsystem/auro-background';

  export let bg = undefined;
</script>

<auro-background
  use:setAttribute={{attr: 'bg', val: bg}}
>
  <slot></slot>
</auro-background>

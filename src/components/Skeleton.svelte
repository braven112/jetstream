<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
    import '@aurodesignsystem/auro-skeleton';

    export let shape = undefined;
    export let style = undefined;
</script>

<auro-skeleton
  use:setAttribute={{attr: 'shape', val: shape}}
  use:setAttribute={{attr: 'style', val: style}}
  >
  <slot></slot>
</auro-skeleton>

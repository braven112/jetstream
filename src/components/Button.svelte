<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-button';

  export let variant = undefined;
  export let onDark = undefined;
  export let disabled = undefined;
  export let slim = undefined;
  export let ariaLabel = undefined;
</script>

<auro-button
  use:setAttribute={{attr: 'variant', val: variant}}
  use:setAttribute={{attr: 'onDark', val: onDark}}
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'slim', val: slim}}
  use:setAttribute={{attr: 'aria-label', val: ariaLabel}}
  >
  <slot></slot>
  <slot name="icon"></slot>
</auro-button>

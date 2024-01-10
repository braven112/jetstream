<script>
// @ts-nocheck
	  
  import '@aurodesignsystem/auro-button';
  import setAttribute from '$lib/setAttribute';

  export let ariaLabel = undefined;
  export let rounded = undefined;
  export let disabled = undefined;
  export let secondary = undefined;
</script>

<auro-button
  use:setAttribute={{attr: 'aria-label', val: ariaLabel}}
  use:setAttribute={{attr: 'rounded', val: rounded}}
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'secondary', val: secondary}}
  >
  <slot></slot>
</auro-button>
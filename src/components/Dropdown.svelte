<script>
// @ts-nocheck

  import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-dropdown';

  export let bordered = undefined;
  export let chevron = undefined;
  export let disabled = undefined;
  export let error = undefined;
  export let inset = undefined;
  export let isPopoverVisible = undefined;
  export let matchWidth = undefined;
  export let noHideOnThisFocusLoss = undefined;
  export let noToggle = undefined;
  export let ready = undefined;
  export let rounded = undefined;
  export let ariaLabel = undefined;
  export let id = undefined;
  export let common = undefined;
</script>

<auro-dropdown
    use:setAttribute={{attr: 'bordered', val: bordered}}
    use:setAttribute={{attr: 'chevron', val: chevron}}
    use:setAttribute={{attr: 'disabled', val: disabled}}
    use:setAttribute={{attr: 'error', val: error}}
    use:setAttribute={{attr: 'inset', val: inset}}
    use:setAttribute={{attr: 'isPopoverVisible', val: isPopoverVisible}}
    use:setAttribute={{attr: 'matchWidth', val: matchWidth}}
    use:setAttribute={{attr: 'noHideOnThisFocusLoss', val: noHideOnThisFocusLoss}}
    use:setAttribute={{attr: 'noToggle', val: noToggle}}
    use:setAttribute={{attr: 'ready', val: ready}}
    use:setAttribute={{attr: 'rounded', val: rounded}}
    use:setAttribute={{attr: 'aria-label', val: ariaLabel}}
    use:setAttribute={{attr: 'id', val: id}}
    use:setAttribute={{attr: 'common', val: common}}
>
  <slot></slot>
  <slot name="helpText"></slot>
  <slot name="label"></slot>
  <slot name="trigger"></slot>
</auro-dropdown>

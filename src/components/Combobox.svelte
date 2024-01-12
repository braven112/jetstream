<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
    import '@aurodesignsystem/auro-combobox';

    export let checkmark = undefined;
    export let disabled = undefined;
    export let error = undefined;
    export let noFilter = undefined;
    export let noValidate = undefined;
    export let optionSelected = undefined;
    export let required = undefined;
    export let setCustomValidity = undefined;
    export let triggerIcon = undefined;
    export let type = undefined;
    export let validity = undefined;
    export let value = undefined;
</script>

<auro-combobox
  use:setAttribute={{attr: 'checkmark', val: checkmark}}
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'error', val: error}}
  use:setAttribute={{attr: 'noFilter', val: noFilter}}
  use:setAttribute={{attr: 'noValidate', val: noValidate}}
  use:setAttribute={{attr: 'optionSelected', val: optionSelected}}
  use:setAttribute={{attr: 'required', val: required}}
  use:setAttribute={{attr: 'setCustomValidity', val: setCustomValidity}}
  use:setAttribute={{attr: 'triggerIcon', val: triggerIcon}}
  use:setAttribute={{attr: 'type', val: type}}
  use:setAttribute={{attr: 'validity', val: validity}}
  use:setAttribute={{attr: 'value', val: value}}
  >
  <slot></slot>
  <slot name="helpText"></slot>
  <slot name="label"></slot>
</auro-combobox>
<script>
// @ts-nocheck

  import setAttribute from '$lib/setAttribute';
  import 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-select@latest/dist/auro-select__bundled.js';


  export let disabled = undefined;
  export let error = undefined;
  export let nocheckmark = undefined;
  export let noValidate = undefined;
  export let optionSelected = undefined;
  export let placeholder = undefined;
  export let required = undefined;
  export let setCustomValidity = undefined;
  export let setCustomValidityCustomError = undefined;
  export let setCustomValidityValueMissing = undefined;
  export let validity = undefined;
  export let value = undefined;
</script>

<auro-select
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'error', val: error}}
  use:setAttribute={{attr: 'nocheckmark', val: nocheckmark}}
  use:setAttribute={{attr: 'noValidate', val: noValidate}}
  use:setAttribute={{attr: 'optionSelected', val: optionSelected}}
  use:setAttribute={{attr: 'placeholder', val: placeholder}}
  use:setAttribute={{attr: 'required', val: required}}
  use:setAttribute={{attr: 'setCustomValidity', val: setCustomValidity}}
  use:setAttribute={{attr: 'setCustomValidityCustomError', val: setCustomValidityCustomError}}
  use:setAttribute={{attr: 'setCustomValidityValueMissing', val: setCustomValidityValueMissing}}
  use:setAttribute={{attr: 'validity', val: validity}}
  use:setAttribute={{attr: 'value', val: value}}
  >
  <slot></slot>
  <slot name="helpText"></slot>
  <slot name="label"></slot>
</auro-select>

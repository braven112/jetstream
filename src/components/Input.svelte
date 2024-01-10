<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-input';

  export let id = undefined;
  export let bordered = undefined;
  export let required = undefined;
  export let placeholder = undefined;
  export let type = undefined;
  export let max = undefined;
  export let setCustomValidityRangeOverflow = undefined;
  export let setCustomValidityBadInput = undefined;
  export let pattern = undefined;
  export let spellcheck = undefined;
  export let error = undefined;
  export let maxlength = undefined;
  export let disabled = undefined;
  export let activeLabel = undefined;
  export let style = undefined;
  export let min = undefined;
  export let borderless = undefined;
  export let setCustomValidityRangeUnderflow = undefined;
  export let onChange = undefined;
  export let keyup = undefined;
</script>

<auro-input
  use:setAttribute={{attr: 'id', val: id}}
  use:setAttribute={{attr: 'bordered', val: bordered}}
  use:setAttribute={{attr: 'required', val: required}}
  use:setAttribute={{attr: 'placeholder', val: placeholder}}
  use:setAttribute={{attr: 'type', val: type}}
  use:setAttribute={{attr: 'max', val: max}}
  use:setAttribute={{attr: 'setCustomValidityRangeOverflow', val: setCustomValidityRangeOverflow}}
  use:setAttribute={{attr: 'setCustomValidityBadInput', val: setCustomValidityBadInput}}
  use:setAttribute={{attr: 'pattern', val: pattern}}
  use:setAttribute={{attr: 'spellcheck', val: spellcheck}}
  use:setAttribute={{attr: 'error', val: error}}
  use:setAttribute={{attr: 'maxlength', val: maxlength}}
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'activeLabel', val: activeLabel}}
  use:setAttribute={{attr: 'style', val: style}}
  use:setAttribute={{attr: 'min', val: min}}
  use:setAttribute={{attr: 'borderless', val: borderless}}
  use:setAttribute={{attr: 'setCustomValidityRangeUnderflow', val: setCustomValidityRangeUnderflow}}
  use:setAttribute={{attr: 'onChange', val: onChange}}
  use:setAttribute={{attr: 'keyup', val: keyup}}
  >
  <slot></slot>
  <slot name="label"></slot>
  <slot name="helptext"></slot>
  <slot></slot>
</auro-input>

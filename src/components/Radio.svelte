<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
    import '@aurodesignsystem/auro-radio';

    export let checked = undefined;
    export let disabled = undefined;
    export let error = undefined;
    export let id = undefined;
    export let label = undefined;
    export let name = undefined;
    export let required = undefined;
    export let tabIndex = undefined;
    export let value = undefined;
</script>

<auro-radio
  use:setAttribute={{attr: 'checked', val: checked}}
  use:setAttribute={{attr: 'disabled', val: disabled}}
  use:setAttribute={{attr: 'error', val: error}}
  use:setAttribute={{attr: 'id', val: id}}
  use:setAttribute={{attr: 'label', val: label}}
  use:setAttribute={{attr: 'name', val: name}}
  use:setAttribute={{attr: 'required', val: required}}
  use:setAttribute={{attr: 'tabIndex', val: tabIndex}}
  use:setAttribute={{attr: 'value', val: value}}
>
  <slot></slot>
</auro-radio>

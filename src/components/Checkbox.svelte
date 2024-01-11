<script>
  // @ts-nocheck

  import setAttribute from "$lib/setAttribute";
  import '@aurodesignsystem/auro-checkbox';

  export let value = undefined;
  export let name = undefined;
  export let id = undefined;
  export let checked = undefined;
</script>

<auro-checkbox
  use:setAttribute={{attr: 'value', val: value}}
  use:setAttribute={{attr: 'name', val: name}}
  use:setAttribute={{attr: 'id', val: id}}
  use:setAttribute={{attr: 'checked', val: checked}}
  >
  <slot></slot>
</auro-checkbox>
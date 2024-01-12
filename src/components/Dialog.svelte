<script>
  // @ts-nocheck

  import setAttribute from "$lib/setAttribute";
  import '@alaskaairux/auro-interruption/dist/auro-dialog__bundled';

  export let id = undefined;
  export let left = undefined;
  export let sm = undefined;
  export let md = undefined;
  export let modal = undefined;
</script>

<auro-dialog
  use:setAttribute={{attr: 'id', val: id}}
  use:setAttribute={{attr: 'left', val: left}}
  use:setAttribute={{attr: 'sm', val: sm}}
  use:setAttribute={{attr: 'md', val: md}}
  use:setAttribute={{attr: 'modal', val: modal}}
  >
  <slot></slot>
  <slot name="header"></slot>
  <slot name="content"></slot>
  <slot name="footer"></slot>
</auro-dialog>
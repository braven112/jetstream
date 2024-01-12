<script>
// @ts-nocheck

  import '@aurodesignsystem/auro-toast';
  import setAttribute from "$lib/setAttribute";

  export let variant = undefined;
  export let noIcon = undefined;
  export let id = undefined;
  export let style = undefined;
  
</script>

<auro-toast
  use:setAttribute={{attr: 'variant', val: variant}}
  use:setAttribute={{attr: 'noIcon', val: noIcon}}
  use:setAttribute={{attr: 'id', val: id}}
  use:setAttribute={{attr: 'style', val: style}}
  >
<slot></slot>
</auro-toast>
<script>
  // @ts-nocheck
  
    import setAttribute from "$lib/setAttribute";
    import '@aurodesignsystem/auro-header';
  
    export let level = undefined;
    export let display = undefined;
    export let margin = undefined;
    export let size = undefined;
  </script>

<auro-header 
  use:setAttribute={{attr: 'level', val: level}}
  use:setAttribute={{attr: 'display', val: display}}
  use:setAttribute={{attr: 'margin', val: margin}}
  use:setAttribute={{attr: 'size', val: size}}
  >
  <slot></slot>
</auro-header>
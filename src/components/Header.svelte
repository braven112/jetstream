<script>
  // @ts-nocheck
  
    import setAttribute from "$lib/setAttribute";
    import '@aurodesignsystem/auro-header';
  
    export let level = undefined;
    export let display = undefined;
  </script>

<auro-header 
  use:setAttribute={{attr: 'level', val: level}}
  use:setAttribute={{attr: 'display', val: display}}
  >
  <slot></slot>
</auro-header>
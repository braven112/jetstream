<script>
  // @ts-nocheck

  import setAttribute from "$lib/setAttribute";
  import '@aurodesignsystem/auro-carousel';

  export let centerSelected = undefined;
  export let label = undefined;
  export let scrolldistance = undefined;
</script>

<auro-carousel
  use:setAttribute={{attr: 'centerSelected', val: centerSelected}}
  use:setAttribute={{attr: 'label', val: label}}
  use:setAttribute={{attr: 'scrolldistance', val: scrolldistance}}
  >
  <slot></slot>
</auro-carousel>
<script>
  // @ts-nocheck
      
  import '@aurodesignsystem/auro-badge';
  import setAttribute from '$lib/setAttribute';

  export let ondark = undefined;
  export let space = undefined;
  export let error = undefined;
  export let success = undefined;
  export let advisory = undefined;
  export let pill = undefined;
  export let emerald = undefined;
  export let sapphire = undefined;
  export let ruby = undefined;
</script>

<auro-badge
  use:setAttribute={{attr: 'ondark', val: ondark}}
  use:setAttribute={{attr: 'space', val: space}}
  use:setAttribute={{attr: 'error', val: error}}
  use:setAttribute={{attr: 'success', val: success}}
  use:setAttribute={{attr: 'advisory', val: advisory}}
  use:setAttribute={{attr: 'pill', val: pill}}
  use:setAttribute={{attr: 'emerald', val: emerald}}
  use:setAttribute={{attr: 'sapphire', val: sapphire}}
  use:setAttribute={{attr: 'ruby', val: ruby}}
  >
  <slot></slot>
</auro-badge>

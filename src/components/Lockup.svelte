<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-lockup';

  export let oneworld = undefined;
  export let ondark = undefined;
  export let path = undefined;
  export let standard = undefined;
</script>

<auro-lockup
  use:setAttribute={{attr: 'oneworld', val: oneworld}}
  use:setAttribute={{attr: 'ondark', val: ondark}}
  use:setAttribute={{attr: 'path', val: path}}
  use:setAttribute={{attr: 'standard', val: standard}}
  >
  <slot></slot>
  <slot name="title"></slot>
  <slot name="subtitle"></slot>
</auro-lockup>

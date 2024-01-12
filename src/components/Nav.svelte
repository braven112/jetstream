<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-nav@latest/dist/auro-nav__bundled.js';

  export let download = undefined;
  export let fluid = undefined;
  export let href = undefined;
  export let ondark = undefined;
  export let referrerpolicy = undefined;
  export let rel = undefined;
  export let relative = undefined;
  export let role = undefined;
  export let secondary = undefined;
  export let target = undefined;
  export let type = undefined;
  export let anchorNavContent = undefined;
  export let style = undefined;
</script>

<auro-nav
  use:setAttribute={{attr: 'download', val: download}}
  use:setAttribute={{attr: 'fluid', val: fluid}}
  use:setAttribute={{attr: 'href', val: href}}
  use:setAttribute={{attr: 'ondark', val: ondark}}
  use:setAttribute={{attr: 'referrerpolicy', val: referrerpolicy}}
  use:setAttribute={{attr: 'rel', val: rel}}
  use:setAttribute={{attr: 'relative', val: relative}}
  use:setAttribute={{attr: 'role', val: role}}
  use:setAttribute={{attr: 'secondary', val: secondary}}
  use:setAttribute={{attr: 'target', val: target}}
  use:setAttribute={{attr: 'type', val: type}}
  use:setAttribute={{attr: 'anchorNavContent', val: anchorNavContent}}
  use:setAttribute={{attr: 'style', val: style}}
  >
  <slot></slot>
  <slot name="mobileToggleCollapsed"></slot>
  <slot name="mobileToggleExpanded"></slot>
</auro-nav>

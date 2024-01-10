<script>
// @ts-nocheck

  import 'https://cdn.jsdelivr.net/npm/@alaskaairux/auro-card@latest/dist/auro-banner__bundled.js';
  import setAttribute from '$lib/setAttribute';

  export let billboard = undefined;
  export let slim = undefined;
  export let alignLeft = undefined;
  export let alignRight = undefined;
  export let ondark = undefined;
  export let hero = undefined;
  export let iconic = undefined;
  export let iconbg = undefined;
  export let marquee = undefined;
  export let solid = undefined;
  export let roundedBorder = undefined;
</script>

<auro-banner
  use:setAttribute={{attr: 'billboard', val: billboard}}
  use:setAttribute={{attr: 'slim', val: slim}}
  use:setAttribute={{attr: 'alignLeft', val: alignLeft}}
  use:setAttribute={{attr: 'alignRight', val: alignRight}}
  use:setAttribute={{attr: 'ondark', val: ondark}}
  use:setAttribute={{attr: 'hero', val: hero}}
  use:setAttribute={{attr: 'iconic', val: iconic}}
  use:setAttribute={{attr: 'iconbg', val: iconbg}}
  use:setAttribute={{attr: 'marquee', val: marquee}}
  use:setAttribute={{attr: 'solid', val: solid}}
  use:setAttribute={{attr: 'roundedBorder', val: roundedBorder}}
  >
  <slot></slot>
  <slot name="displayImage"></slot>
  <slot name="contentImage"></slot>
  <slot name="description"></slot>
  <slot name="action"></slot>
  <slot name="title"></slot>
  <slot name="prefix"></slot>
  <slot name="icon"></slot>
  <slot name="disclaimer"></slot>
</auro-banner>
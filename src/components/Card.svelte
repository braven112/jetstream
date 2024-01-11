<script>
  // @ts-nocheck

  import setAttribute from "$lib/setAttribute";
  import 'https://cdn.jsdelivr.net/npm/@alaskaairux/auro-card@latest/dist/auro-card__bundled.js';

  export let alignLeft = undefined;
</script>

<auro-card
  use:setAttribute={{attr: 'alignLeft', val: alignLeft}}
  >
  <slot></slot>
  <slot name="title"></slot>
  <slot name="image"></slot>
  <slot name="description"></slot>
  <slot name="disclaimer"></slot>
  <slot name="action"></slot>
</auro-card>


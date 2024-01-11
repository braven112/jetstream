<script>
  import '@aurodesignsystem/auro-sidenav';
  import '@aurodesignsystem/auro-hyperlink';
  import '@aurodesignsystem/auro-themeswitcher';
  // import '@aurodesignsystem/auro-checkbox';
  // import Checkbox from "../components/Checkbox.svelte";
  import "@alaskaairux/auro-interruption/dist/auro-dialog";
	import sidenav from '../pageData/sidenav';
  import setAttribute from '$lib/setAttribute';

</script>

<auro-sidenav test="test123">
  <auro-themeswitcher>Select Theme</auro-themeswitcher>
  <span slot="heading"><h3>Components</h3></span>
  {#each sidenav as section, index}
    <auro-sidenavsection key={`section-${index}`}>
      <span slot="trigger">{section.heading}</span>
      {#each section.items as item, itemIdx}
        <auro-sidenavitem key={`item-${itemIdx}`}
        use:setAttribute={{attr: 'href', val: item.href}}
        use:setAttribute={{attr: 'relative', val: true}}>{item.label}</auro-sidenavitem>
      {/each}
    </auro-sidenavsection>
  {/each}
</auro-sidenav>

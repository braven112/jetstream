<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
  import '@aurodesignsystem/auro-flight';
   
    export let canceled = undefined;
    export let destinationCanceled = undefined;
    export let duration = undefined;
    export let iata = undefined;
    export let nextDay = undefined;
    export let stopover = undefined;
</script>

<auro-flightline
  use:setAttribute={{attr: 'canceled', val: canceled}}
  use:setAttribute={{attr: 'destinationCanceled', val: destinationCanceled}}
  use:setAttribute={{attr: 'duration', val: duration}}
  use:setAttribute={{attr: 'iata', val: iata}}
  use:setAttribute={{attr: 'nextDay', val: nextDay}}
  use:setAttribute={{attr: 'stopover', val: stopover}}
  >
  <slot></slot>
</auro-flightline>
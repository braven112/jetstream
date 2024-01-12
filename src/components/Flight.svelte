<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
    import '@aurodesignsystem/auro-flight';

    export let arrivalStation = undefined;
    export let arrivalTime = undefined;
    export let departureStation = undefined;
    export let departureTime = undefined;
    export let duration = undefined;
    export let flights = undefined;
    export let reroutedArrivalStation = undefined;
    export let reroutedDepartureStation = undefined;
    export let stops = undefined;
</script>

<auro-flight
  use:setAttribute={{attr: 'arrivalStation', val: arrivalStation}}
  use:setAttribute={{attr: 'arrivalTime', val: arrivalTime}}
  use:setAttribute={{attr: 'departureStation', val: departureStation}}
  use:setAttribute={{attr: 'departureTime', val: departureTime}}
  use:setAttribute={{attr: 'duration', val: duration}}
  use:setAttribute={{attr: 'flights', val: flights}}
  use:setAttribute={{attr: 'reroutedArrivalStation', val: reroutedArrivalStation}}
  use:setAttribute={{attr: 'reroutedDepartureStation', val: reroutedDepartureStation}}
  use:setAttribute={{attr: 'stops', val: stops}}
  >
  <slot></slot>
  <slot name="arrivalHeader"></slot>
  <slot name="departureHeader"></slot>
  <slot name="footer"></slot>
</auro-flight>
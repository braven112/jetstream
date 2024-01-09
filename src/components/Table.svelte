<script>
// @ts-nocheck

	import setAttribute from '$lib/setAttribute';
    import '@aurodesignsystem/auro-table';

    export const columnHeaders = undefined;
    export const componentData = undefined;
    export const nowrap = undefined;

    const headers=JSON.stringify(["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]);
    const data=JSON.stringify([
        {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
        {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
        {"": "Team meeting", "Wednesday": "10:00am" },
        {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
    ]);
</script>

<auro-table
  use:setAttribute={{attr: 'columnHeaders', val: headers}}
  use:setAttribute={{attr: 'componentData', val: data}}
  use:setAttribute={{attr: 'nowrap', val: nowrap}}
  >
  <slot></slot>
</auro-table>

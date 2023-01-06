<script lang="ts">
  import Table from "./Table.svelte";

  export let tableHeaders: Array<any>;
  export let tableBody: Array<any>;
</script>

<Table {tableHeaders} {tableBody} />

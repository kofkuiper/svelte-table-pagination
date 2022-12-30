<script lang="ts">
  import Pagination from "./Pagination.svelte";
  import Search from "./Search.svelte";
  import Table from "./Table.svelte";

  export let tableHeaders: Array<any>;
  export let tableBody: Array<any>;
</script>

<Search />
<Table {tableHeaders} {tableBody} />
<Pagination />

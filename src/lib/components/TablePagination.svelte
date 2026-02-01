<script lang="ts">
  import { validateTablePaginationProps } from "$lib/services/validations.service.js";
  import IconCircleChevronsDown from "./Icons/IconCircleChevronsDown.svelte";
  import IconCircleChevronsUp from "./Icons/IconCircleChevronsUp.svelte";
  import Pagination from "./Pagination.svelte";
  import Search from "./Search.svelte";
  import ShowEntries from "./ShowEntries.svelte";
  import ShowEntriesDetails from "./ShowEntriesDetails.svelte";
  import { createEventDispatcher } from "svelte";

  interface Props {
    tableColumns: Array<string>;
    tableBody: Array<any>;
    searchableColumns: Array<boolean>;
    sortableColumns: Array<boolean>;
    isActionColumns: Array<boolean>;
    actionsHtml: Array<any>;
  }

  let {
    tableColumns,
    tableBody,
    searchableColumns,
    sortableColumns,
    isActionColumns,
    actionsHtml,
  }: Props = $props();

  const dispatch = createEventDispatcher();

  let entries = $state(10);
  let searchKeyWord = $state("");
  let selectedPage = $state(1);
  
  // State for sorting
  let currentSortIndex = $state(-1);
  let isDescending = $state(false);

  // Validation Effect
  $effect(() => {
    validateTablePaginationProps(
      tableColumns,
      searchableColumns,
      sortableColumns,
      isActionColumns,
      actionsHtml
    );
  });

  // Derived: Search
  let searchedData = $derived.by(() => {
    const keyword = searchKeyWord.toLowerCase();
    if (!keyword) return tableBody;

    return tableBody.filter((row) => {
      for (let i = 0; i < tableColumns.length; i++) {
        const column = tableColumns[i];
        if (searchableColumns[i] && row[column]?.toString().toLowerCase().includes(keyword)) {
          return true;
        }
      }
      return false;
    });
  });

  // Derived: Sort
  let sortedData = $derived.by(() => {
    if (currentSortIndex === -1 || !sortableColumns[currentSortIndex]) {
      return searchedData;
    }

    const column = tableColumns[currentSortIndex];
    // Create a shallow copy to sort
    const dataToSort = [...searchedData];

    return dataToSort.sort((a, b) => {
      const valA = a[column];
      const valB = b[column];
      const aString = typeof valA === "string";
      const bString = typeof valB === "string";

      let comparison = 0;
      if (aString || bString) {
        comparison = String(valA).localeCompare(String(valB));
      } else {
        comparison = valA - valB;
      }

      return isDescending ? -comparison : comparison;
    });
  });

  // Derived: Pagination
  let allPagesLength = $derived(Math.ceil(sortedData.length / entries));
  
  // Reset selected page if it exceeds max pages
  $effect(() => {
      if (selectedPage > allPagesLength && allPagesLength > 0) {
          selectedPage = allPagesLength;
      } else if (selectedPage < 1) {
          selectedPage = 1;
      }
  });

  let startEntries = $derived((selectedPage - 1) * entries);
  let filteredData = $derived(sortedData.slice(startEntries, startEntries + entries));

  // Sort Handler
  function sort(index: number) {
    if (!sortableColumns[index]) return;

    if (currentSortIndex === index) {
      isDescending = !isDescending;
    } else {
      currentSortIndex = index;
      isDescending = false;
    }
  }
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta16/dist/js/tabler.min.js"
  >
  </script>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta16/dist/css/tabler.min.css"
  />
</svelte:head>

<div class="card">
  <div class="card-body border-bottom py-3">
    <div class="d-flex">
      <ShowEntries bind:entries />
      <Search bind:searchKeyWord />
    </div>
  </div>
  <div class="table-responsive">
    <table class="table card-table table-vcenter text-nowrap datatable">
      <thead>
        <tr>
          {#each tableColumns as header, index}
            <th>
              {#if sortableColumns[index] && !isActionColumns[index]}
                <a
                  class="nav-link px-0"
                  type="button"
                  href={null}
                  onclick={() => sort(index)}
                >
                  {header}
                  {#if currentSortIndex === index}
                    {#if isDescending}
                      <IconCircleChevronsDown />
                    {:else}
                      <IconCircleChevronsUp />
                    {/if}
                  {:else}
                     <IconCircleChevronsDown />
                  {/if}
                </a>
              {:else}
                {header}
              {/if}
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each filteredData as body, bodyIndex}
          <tr>
            {#each tableColumns as column, columnIndex}
              {#if isActionColumns[columnIndex]}
                <td>
                  {#each actionsHtml[columnIndex] as innerHtml, actionIndex}
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div
                      id="columnIndex:{columnIndex}-bodyIndex:{bodyIndex}-actionIndex:{actionIndex}"
                      onclick={() =>
                        dispatch("onClick", {
                          columnIndex,
                          bodyIndex,
                          actionIndex,
                          body,
                        })}
                    >
                      {@html innerHtml}
                    </div>
                  {/each}
                </td>
              {:else}
                <td>{body[column]}</td>
              {/if}
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div class="card-footer d-flex align-items-center">
    <ShowEntriesDetails
      allDataLength={sortedData.length}
      filteredDataLength={filteredData.length}
      {startEntries}
    />
    <Pagination bind:selectedPage {allPagesLength} />
  </div>
</div>

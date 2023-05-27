<script>import { validateTablePaginationProps } from "../services/validations.service.js";
import IconCircleChevronsDown from "./Icons/IconCircleChevronsDown.svelte";
import IconCircleChevronsUp from "./Icons/IconCircleChevronsUp.svelte";
import Pagination from "./Pagination.svelte";
import Search from "./Search.svelte";
import ShowEntries from "./ShowEntries.svelte";
import ShowEntriesDetails from "./ShowEntriesDetails.svelte";
import { createEventDispatcher } from "svelte";
export let tableColumns;
export let tableBody;
export let searchableColumns;
export let sortableColumns;
export let isActionColumns;
export let actionsHtml;
const dispatch = createEventDispatcher();
let data = tableBody;
let entries = 10;
let filteredData = [];
let searchKeyWord = "";
let selectedPage = 1;
let allPagesLength = 0;
let startEntries = 0;
let sortableColumnsArray;
let isSorting;
$:
  validateTablePaginationProps(
    tableColumns,
    searchableColumns,
    sortableColumns,
    isActionColumns,
    actionsHtml
  );
$:
  initSortableColumnsArray();
$:
  search(searchKeyWord.toLowerCase());
$:
  calculateAllPagesLength(data, entries);
$:
  calculateStartEntries(selectedPage, entries);
$:
  updateFilterData(data, startEntries, entries);
function search(_searchKeyword) {
  data = tableBody.filter((data2) => {
    for (let i = 0; i < tableColumns.length; i++) {
      const column = tableColumns[i];
      if (isSearchableColumns(column) && data2[column].toString().toLowerCase().indexOf(_searchKeyword) !== -1) {
        return true;
      }
    }
  });
}
function isSearchableColumns(_column) {
  return searchableColumns[tableColumns.findIndex((header) => header === _column)];
}
function calculateAllPagesLength(_data, _entries) {
  allPagesLength = Math.ceil(_data.length / _entries);
}
function calculateStartEntries(_selectedPage, _entries) {
  let index = _selectedPage - 1;
  startEntries = index == 0 ? 0 : index-- * _entries;
}
function updateFilterData(_data, _startEntries, _entries) {
  filteredData = _data.slice(startEntries, startEntries + _entries);
}
function initSortableColumnsArray() {
  sortableColumnsArray = tableColumns.map((column, index) => {
    return {
      column,
      isSortable: sortableColumns[index],
      isDescending: false
    };
  });
}
function sort(index) {
  if (isSorting)
    return;
  try {
    isSorting = true;
    const sortColumn = sortableColumnsArray[index];
    if (!sortColumn.isSortable)
      return;
    const desc = !sortColumn.isDescending;
    const column = sortColumn.column;
    if (desc) {
      data = data.sort(
        (a, b) => typeof b[column] === "string" || typeof a[column] === "string" ? b[column].localeCompare(a[column]) : b[column] - a[column]
      );
    } else {
      data = data.sort((a, b) => a[column] - b[column]);
      data = data.sort(
        (a, b) => typeof b[column] === "string" || typeof a[column] === "string" ? a[column].localeCompare(b[column]) : a[column] - b[column]
      );
    }
    updateSortColumnsIsDescending(index, desc);
  } catch (error) {
    console.log(
      `Error sort with column '${sortableColumnsArray[index].column}' 
 detail: ${error}`
    );
  } finally {
    isSorting = false;
  }
}
function updateSortColumnsIsDescending(index, isDescending) {
  sortableColumnsArray.forEach((value) => value.isDescending = false);
  sortableColumnsArray[index].isDescending = isDescending;
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
                  on:click={() => sort(index)}
                >
                  {header}
                  {#if sortableColumnsArray[index].isDescending}
                    <IconCircleChevronsUp />
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
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                      id="columnIndex:{columnIndex}-bodyIndex:{bodyIndex}-actionIndex:{actionIndex}"
                      on:click={() =>
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
      allDataLength={data.length}
      filteredDataLength={filteredData.length}
      {startEntries}
    />
    <Pagination bind:selectedPage {allPagesLength} />
  </div>
</div>

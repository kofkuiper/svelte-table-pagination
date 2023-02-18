<script lang="ts">
  import { validateTablePaginationProps } from "$lib/services/validations.service";
  import IconCircleChevronsDown from "./Icons/IconCircleChevronsDown.svelte";
  import IconCircleChevronsUp from "./Icons/IconCircleChevronsUp.svelte";
  import Pagination from "./Pagination.svelte";
  import Search from "./Search.svelte";
  import ShowEntries from "./ShowEntries.svelte";
  import ShowEntriesDetails from "./ShowEntriesDetails.svelte";

  export let tableColumns: Array<string>;
  export let tableBody: Array<any>;
  export let searchableColumns: Array<boolean>;
  export let sortableColumns: Array<boolean>;
  export let isActionColumns: Array<boolean>;
  export let actionsHtml: Array<any>;

  let data = tableBody;
  let entries: number = 10;
  let filteredData: Array<any> = [];
  let searchKeyWord: string = "";
  let selectedPage: number = 1;
  let allPagesLength: number = 0;
  let startEntries: number = 0;
  let sortableColumnsArray: Array<any>;
  let isSorting: boolean;

  $: validateTablePaginationProps(
    tableColumns,
    searchableColumns,
    sortableColumns,
    isActionColumns,
    actionsHtml
  );
  $: initSortableColumnsArray();
  $: search(searchKeyWord.toLowerCase());
  $: calculateAllPagesLength(data, entries);
  $: calculateStartEntries(selectedPage, entries);
  $: updateFilterData(data, startEntries, entries);

  function search(_searchKeyword: string) {
    data = tableBody.filter((data) => {
      for (let i = 0; i < tableColumns.length; i++) {
        const column = tableColumns[i];
        if (
          isSearchableColumns(column) &&
          data[column].toString().toLowerCase().indexOf(_searchKeyword) !== -1
        ) {
          return true;
        }
      }
    });
  }

  function isSearchableColumns(_column: string) {
    return searchableColumns[
      tableColumns.findIndex((header) => header === _column)
    ];
  }

  function calculateAllPagesLength(_data: Array<any>, _entries: number) {
    allPagesLength = Math.ceil(_data.length / _entries);
  }

  function calculateStartEntries(_selectedPage: number, _entries: number) {
    let index = _selectedPage - 1;
    startEntries = index == 0 ? 0 : index-- * _entries;
  }

  function updateFilterData(
    _data: Array<any>,
    _startEntries: number,
    _entries: number
  ) {
    filteredData = _data.slice(startEntries, startEntries + _entries);
  }

  function initSortableColumnsArray() {
    sortableColumnsArray = tableColumns.map((column, index) => {
      return {
        column,
        isSortable: sortableColumns[index],
        isDescending: false,
      };
    });
  }

  function sort(index: number) {
    if (isSorting) return;
    try {
      isSorting = true;
      const sortColumn = sortableColumnsArray[index];
      if (!sortColumn.isSortable) return;
      const desc = !sortColumn.isDescending;
      const column = sortColumn.column;

      if (desc) {
        data = data.sort((a: any, b: any) =>
          typeof b[column] === "string" || typeof a[column] === "string"
            ? b[column].localeCompare(a[column])
            : b[column] - a[column]
        );
      } else {
        data = data.sort((a: any, b: any) => a[column] - b[column]);
        data = data.sort((a: any, b: any) =>
          typeof b[column] === "string" || typeof a[column] === "string"
            ? a[column].localeCompare(b[column])
            : a[column] - b[column]
        );
      }
      updateSortColumnsIsDescending(index, desc);
    } catch (error) {
      console.log(
        `Error sort with column '${sortableColumnsArray[index].column}' \n detail: ${error}`
      );
    } finally {
      isSorting = false;
    }
  }

  function updateSortColumnsIsDescending(index: number, isDescending: boolean) {
    sortableColumnsArray.forEach((value) => (value.isDescending = false));
    sortableColumnsArray[index].isDescending = isDescending;
  }
</script>

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
                  {#each actionsHtml[columnIndex] as innerHtml}
                    {@html innerHtml
                      .replace("#id", `${bodyIndex}`)
                      .replace("#data", `${JSON.stringify(body)}`)}
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

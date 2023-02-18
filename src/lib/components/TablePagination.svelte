<script lang="ts">
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

  let data = tableBody;
  let entries: number = 10;
  let filteredData: Array<any> = [];
  let searchKeyWord: string = "";
  let selectedPage: number = 1;
  let allPagesLength: number = 0;
  let startEntries: number = 0;
  let sortableColumnsArray: Array<any>;
  let isSorting: boolean;

  $: validateProps();
  $: initSortableColumnsArray();
  $: search(searchKeyWord.toLowerCase());
  $: calculateAllPagesLength(data, entries);
  $: calculateStartEntries(selectedPage, entries);
  $: updateFilterData(data, startEntries, entries);

  function validateProps() {
    if (searchableColumns.length != tableColumns.length) {
      throw new Error(
        `searchableColumns prop must have a length equal to tableColumns prop. Ex. searchableColumns = [${Array.from(
          { length: tableColumns.length },
          (_, i) => true
        )}]
         `
      );
    }
    if (sortableColumns.length != tableColumns.length) {
      throw new Error(
        `sortableColumns prop must have a length equal to tableColumns prop. Ex. searchableColumns = [${Array.from(
          { length: tableColumns.length },
          (_, i) => true
        )}]
         `
      );
    }
  }

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
        data = data.sort((a: any, b: any) => b[column] - a[column]);
      } else {
        data = data.sort((a: any, b: any) => a[column] - b[column]);
      }
      updateSortColumnsIsDescending(index, desc);
    } catch (error) {
      console.log(
        `Error sort with column '${sortableColumnsArray[index].index}'`
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
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each filteredData as body}
          <tr>
            {#each tableColumns as header}
              <td>{body[header]}</td>
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

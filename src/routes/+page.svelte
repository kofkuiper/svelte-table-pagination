<script lang="ts">
  import DemoTablePagination from "$lib/components/DemoTablePagination.svelte";
  import { Examples } from "$site";
</script>

<!-- page header -->
<div class="page-header d-print-none">
  <div class="container-xl">
    <h1>svelte-table-pagination</h1>
  </div>
</div>

<!-- page body -->
<div class="page-body">
  <div class="container-xl">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-9">
        <div class="card card-lg">
          <div class="card-body markdown">
            <h2 id="whos-that-then">Installation</h2>
            <p>
              You can install the svelte-table-pagination component from npm by
              running the following command:
            </p>
            <code>npm install table-pagination</code>
            <hr />
            <h2 id="whos-that-then">Usage</h2>
            <p>
              Once you've installed the table-pagination component, you can
              import it in your SvelteKit project like this:
            </p>
            <code>import TablePagination from 'svelte-table-pagination';</code>
            <hr />
            <h2>Props</h2>
            <p>
              - `tableColumns`: An array of strings representing the column
              headers for the table.
            </p>
            <p>
              - `tableBody`: An array of objects representing the rows for the
              table.
            </p>
            <p>
              - `searchableColumns`: An array of boolean values indicating
              whether each column should be searchable.
            </p>
            <p>
              - `sortableColumns`: An array of boolean values indicating whether
              each column should be sortable.
            </p>
            <p>
              - `isActionColumns`: An array of boolean values indicating whether
              each column should display an action button.
            </p>
            <p>
              - `actionsHtml`: An array of HTML elements to display as the
              action buttons for each row. This prop is only used if
              `isActionColumns` is true for any column. Defaults to an empty
              array.
            </p>
            <p>
              - `on:onClick`: (Optional)An function to handle click on action
              button.
            </p>
            <hr />
            <h2>Example</h2>
            <DemoTablePagination />
            <hr />
            <h2>Code</h2>
            <Examples slot="examples" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

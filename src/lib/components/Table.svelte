<script lang="ts">
  import PagesAmount from "./PagesAmount.svelte";
  import Pagination from "./Pagination.svelte";
  import Search from "./Search.svelte";
  import ShowCurrentPages from "./ShowCurrentPages.svelte";

  export let tableHeaders: Array<any>;
  export let tableBody: Array<any>;
</script>

<div class="page-body">
  <div class="container-xl">
    <div class="card">
      <div class="card-body border-bottom py-3">
        <div class="d-flex">
          <PagesAmount />
          <Search />
        </div>
      </div>
      <div class="table-responsive">
        <table class="table card-table table-vcenter text-nowrap datatable">
          <thead>
            <tr>
              {#each tableHeaders as header}
                <th>{header}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each tableBody as body}
              <tr>
                {#each tableHeaders as header}
                  <td>{body[header]}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="card-footer d-flex align-items-center">
        <ShowCurrentPages />
        <Pagination />
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import IconChevronsLeft from "./Icons/IconChevronsLeft.svelte";
  import IconChevronsRight from "./Icons/IconChevronsRight.svelte";
  import IconDots from "./Icons/IconDots.svelte";
  import IconNext from "./Icons/IconNext.svelte";
  import IconPrev from "./Icons/IconPrev.svelte";

  export let selectedPage: number;
  export let allPagesLength: number;

  let pages = [1, 2, 3, 4, 5];

  function viewPage(page: number) {
    selectedPage = page;
    shiftPages(selectedPage);
  }

  function shiftPages(page: number) {
    let shiftStartAt: number;
    if (page == 1) {
      shiftStartAt = 1;
    } else if (page == allPagesLength && allPagesLength - 4 >= 1) {
      shiftStartAt = allPagesLength - 4;
    } else if (page - 2 >= 1 && page + 2 <= allPagesLength) {
      shiftStartAt = page - 2;
    } else {
      return;
    }
    pages = Array.from({ length: 5 }, (_, i) => i + shiftStartAt);
  }
</script>

<ul class="pagination m-0 ms-auto">
  <li class="page-item">
    <button
      type="button"
      class="page-link {selectedPage == 1 ? 'disabled' : ''}"
      tabindex="-1"
      on:click={() => viewPage(1)}
      disabled={selectedPage == 1}
    >
      <IconChevronsLeft />
    </button>
  </li>
  <li class="page-item">
    <button
      type="button"
      class="page-link {selectedPage == 1 ? 'disabled' : ''}"
      tabindex="-1"
      on:click={() => viewPage(selectedPage - 1)}
      disabled={selectedPage == 1}
    >
      <IconPrev />
      prev
    </button>
  </li>
  {#if pages[0] - 2 > 1}
    <li class="page-item">
      <button type="button" class="page-link" disabled>
        <IconDots />
      </button>
    </li>
  {/if}

  {#each pages as page}
    <li class="page-item {page == selectedPage ? 'active' : ''}">
      <a
        href={null}
        class="page-link {page > allPagesLength ? 'disabled' : ''}"
        type="button"
        on:click={() => viewPage(page)}>{page}</a
      >
    </li>
  {/each}

  {#if pages[4] + 2 <= allPagesLength}
    <li class="page-item">
      <button type="button" class="page-link" disabled>
        <IconDots />
      </button>
    </li>
  {/if}
  <li class="page-item">
    <button
      type="button"
      class="page-link {selectedPage == allPagesLength ? 'disabled' : ''}"
      on:click={() => viewPage(selectedPage + 1)}
      disabled={selectedPage == allPagesLength}
    >
      next
      <IconNext />
    </button>
  </li>
  <li class="page-item">
    <button
      type="button"
      class="page-link {selectedPage == allPagesLength ? 'disabled' : ''}"
      on:click={() => viewPage(allPagesLength)}
      disabled={selectedPage == allPagesLength}
    >
      <IconChevronsRight />
    </button>
  </li>
</ul>

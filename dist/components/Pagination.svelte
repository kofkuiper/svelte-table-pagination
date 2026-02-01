<script lang="ts">
  import IconChevronsLeft from "./Icons/IconChevronsLeft.svelte";
  import IconChevronsRight from "./Icons/IconChevronsRight.svelte";
  import IconDots from "./Icons/IconDots.svelte";
  import IconNext from "./Icons/IconNext.svelte";
  import IconPrev from "./Icons/IconPrev.svelte";

  interface Props {
    selectedPage: number;
    allPagesLength: number;
  }
  let { selectedPage = $bindable(), allPagesLength }: Props = $props();

  let pages = $derived.by(() => {
    if (allPagesLength <= 5) {
      return Array.from({ length: allPagesLength }, (_, i) => i + 1);
    }
    let start = selectedPage - 2;
    if (start < 1) start = 1;
    if (start + 4 > allPagesLength) start = allPagesLength - 4;
    return Array.from({ length: 5 }, (_, i) => start + i);
  });

  function viewPage(page: number) {
    selectedPage = page;
  }
</script>

<ul class="pagination m-0 ms-auto">
  <li class="page-item">
    <button
      type="button"
      class="page-link {selectedPage == 1 ? 'disabled' : ''}"
      tabindex="-1"
      onclick={() => viewPage(1)}
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
      onclick={() => viewPage(selectedPage - 1)}
      disabled={selectedPage == 1}
    >
      <IconPrev />
      prev
    </button>
  </li>
  {#if pages[0] > 1}
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
        onclick={() => viewPage(page)}>{page}</a
      >
    </li>
  {/each}

  {#if pages[pages.length - 1] < allPagesLength}
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
      onclick={() => viewPage(selectedPage + 1)}
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
      onclick={() => viewPage(allPagesLength)}
      disabled={selectedPage == allPagesLength}
    >
      <IconChevronsRight />
    </button>
  </li>
</ul>

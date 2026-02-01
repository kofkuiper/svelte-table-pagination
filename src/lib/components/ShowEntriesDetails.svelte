<script lang="ts">
  interface Props {
    allDataLength: number;
    filteredDataLength: number;
    startEntries: number;
  }
  let { allDataLength, filteredDataLength, startEntries }: Props = $props();
</script>

<p class="m-0 text-muted">
  Showing <span>{startEntries + 1}</span> to
  <span>{startEntries + filteredDataLength}</span>
  of <span>{allDataLength}</span> entries
</p>

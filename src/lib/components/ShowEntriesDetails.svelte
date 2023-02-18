<script lang="ts">
    export let allDataLength: number;
    export let filteredDataLength: number;
    export let startEntries: number;
</script>

<p class="m-0 text-muted">
    Showing <span>{startEntries + 1}</span> to
    <span>{startEntries + filteredDataLength}</span>
    of <span>{allDataLength}</span> entries
</p>

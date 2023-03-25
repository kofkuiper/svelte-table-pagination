<script>export let entries;
</script>

<div class="text-muted">
    Show
    <div class="mx-2 d-inline-block">
        <input
            type="number"
            class="form-control form-control-sm"
            aria-label="Invoices count"
            bind:value={entries}
        />
    </div>
    entries
</div>

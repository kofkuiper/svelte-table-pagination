<script>export let searchKeyWord;
</script>

<div class="ms-auto text-muted">
  Search:
  <div class="ms-2 d-inline-block">
    <input
      type="text"
      class="form-control form-control-sm"
      aria-label="Search invoice"
      bind:value={searchKeyWord}
    />
  </div>
</div>

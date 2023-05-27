<script>
  import IconGitHub from "./Icons/IconGitHub.svelte";
  import IconHeart from "./Icons/IconHeart.svelte";
  import NavbarLogo from "$lib/components/NavbarLogo.svelte";
</script>

<header class="navbar navbar-expand-md navbar-light d-print-none">
  <div class="container-xl">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar-menu"
      aria-controls="navbar-menu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <h1 class="mt-3">
      <NavbarLogo />
    </h1>
    <div class="navbar-nav flex-row order-md-last">
      <div class="nav-item d-none d-md-flex me-3">
        <div class="btn-list">
          <a
            href="https://github.com/kofkuiper/svelte-table-pagination"
            class="btn"
            target="_blank"
            rel="noreferrer"
          >
            <IconGitHub />
            Source code
          </a>
          <a href={null} class="btn" target="_blank" rel="noreferrer">
            <IconHeart />
            Sponsor
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

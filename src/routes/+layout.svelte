<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { children } = $props();
</script>

<Navbar />

<div class="antialiased" style="display: block;">
  <div class="warpped">
    <div class="page-wrapper">
      {@render children()}
      <Footer />
    </div>
  </div>
</div>

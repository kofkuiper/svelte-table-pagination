<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<body class="antialiased" style="display: block;">
  <div class="warpped">
    <div class="page-wrapper">
      <slot />
      <Footer />
    </div>
  </div>
</body>

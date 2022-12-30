<div class="pagination">
  <a href="#">Previous</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">Next</a>
</div>

<style>
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    font-size: 16px;
  }

  .pagination a.active {
    background-color: #4caf50;
    color: white;
  }

  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }
</style>

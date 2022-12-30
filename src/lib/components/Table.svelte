<script lang="ts">
  export let tableHeaders: Array<any>;
  export let tableBody: Array<any>;
</script>

<table>
  <thead>
    <tr>
      {#each tableHeaders as header}
        <th>{header}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each tableBody as body}
      <tr>
        {#each tableHeaders as header}
          <td>{body[header]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>

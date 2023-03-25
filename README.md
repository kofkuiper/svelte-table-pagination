#svelte-table-pagination

## Installation
You can install the svelte-table-pagination component from npm by running the following command:
```
npm install svelte-table-pagination
```
## Usage
Once you've installed the table-pagination component, you can import it in your SvelteKit project like this:
```
import TablePagination from 'svelte-table-pagination';
```

## Props
- `tableColumns`: An array of strings representing the column headers for the table.
- `tableBody`: An array of objects representing the rows for the table.
- `searchableColumns`: An array of boolean values indicating whether each column should be searchable.
- `sortableColumns`: An array of boolean values indicating whether each column should be sortable.
- `isActionColumns`: An array of boolean values indicating whether each column should display an action button.
- `actionsHtml`: An array of HTML elements to display as the action buttons for each row. This prop is only used if `isActionColumns` is true for any column. Defaults to an empty array.
- `on:onClick`: (Optional)An function to handle click on action button. 

## Example
```
<script lang="ts">
  import TablePagination from "$lib/components/TablePagination.svelte";

  const irisColumns = [
    "sepalLength",
    "sepalWidth",
    "petalLength",
    "petalWidth",
    "species",
    "Actions",
  ];

  const searchableColumns = [true, true, true, true, true, false];
  const sortableColumns = [true, true, true, true, true, false];
  const isActionColumns = [false, false, false, false, false, true];
  const actionsHtml = [
    [],
    [],
    [],
    [],
    [],
    [
      ` <button type="button" class="btn btn-icon btn-blue">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-info-circle"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 8l.01 0" />
            <path d="M11 12l1 0l0 4l1 0" />
        </svg>
        </button>`,
      ` <button type="button" class="btn btn-icon btn-yellow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-pencil"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
        </svg>
        </button>`,
    ],
  ];
  const irisData = [
    {
      sepalLength: 5.1,
      sepalWidth: 3.5,
      petalLength: 1.4,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.9,
      sepalWidth: 3.0,
      petalLength: 1.4,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.7,
      sepalWidth: 3.2,
      petalLength: 1.3,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.6,
      sepalWidth: 3.1,
      petalLength: 1.5,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 3.6,
      petalLength: 1.4,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.4,
      sepalWidth: 3.9,
      petalLength: 1.7,
      petalWidth: 0.4,
      species: "setosa",
    },
    {
      sepalLength: 4.6,
      sepalWidth: 3.4,
      petalLength: 1.4,
      petalWidth: 0.3,
      species: "setosa",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 3.4,
      petalLength: 1.5,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.4,
      sepalWidth: 2.9,
      petalLength: 1.4,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.9,
      sepalWidth: 3.1,
      petalLength: 1.5,
      petalWidth: 0.1,
      species: "setosa",
    },
    {
      sepalLength: 5.4,
      sepalWidth: 3.7,
      petalLength: 1.5,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.8,
      sepalWidth: 3.4,
      petalLength: 1.6,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.8,
      sepalWidth: 3.0,
      petalLength: 1.4,
      petalWidth: 0.1,
      species: "setosa",
    },
    {
      sepalLength: 4.3,
      sepalWidth: 3.0,
      petalLength: 1.1,
      petalWidth: 0.1,
      species: "setosa",
    },
    {
      sepalLength: 5.8,
      sepalWidth: 4.0,
      petalLength: 1.2,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.7,
      sepalWidth: 4.4,
      petalLength: 1.5,
      petalWidth: 0.4,
      species: "setosa",
    },
    {
      sepalLength: 5.4,
      sepalWidth: 3.9,
      petalLength: 1.3,
      petalWidth: 0.4,
      species: "setosa",
    },
    {
      sepalLength: 5.1,
      sepalWidth: 3.5,
      petalLength: 1.4,
      petalWidth: 0.3,
      species: "setosa",
    },
    {
      sepalLength: 5.7,
      sepalWidth: 3.8,
      petalLength: 1.7,
      petalWidth: 0.3,
      species: "setosa",
    },
    {
      sepalLength: 5.1,
      sepalWidth: 3.8,
      petalLength: 1.5,
      petalWidth: 0.3,
      species: "setosa",
    },
    {
      sepalLength: 5.4,
      sepalWidth: 3.4,
      petalLength: 1.7,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.1,
      sepalWidth: 3.7,
      petalLength: 1.5,
      petalWidth: 0.4,
      species: "setosa",
    },
    {
      sepalLength: 4.6,
      sepalWidth: 3.6,
      petalLength: 1.0,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.1,
      sepalWidth: 3.3,
      petalLength: 1.7,
      petalWidth: 0.5,
      species: "setosa",
    },
    {
      sepalLength: 4.8,
      sepalWidth: 3.4,
      petalLength: 1.9,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 3.0,
      petalLength: 1.6,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 3.4,
      petalLength: 1.6,
      petalWidth: 0.4,
      species: "setosa",
    },
    {
      sepalLength: 5.2,
      sepalWidth: 3.5,
      petalLength: 1.5,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.2,
      sepalWidth: 3.4,
      petalLength: 1.4,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.7,
      sepalWidth: 3.2,
      petalLength: 1.6,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.8,
      sepalWidth: 3.1,
      petalLength: 1.6,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.4,
      sepalWidth: 3.4,
      petalLength: 1.5,
      petalWidth: 0.4,
      species: "setosa",
    },
    {
      sepalLength: 5.2,
      sepalWidth: 4.1,
      petalLength: 1.5,
      petalWidth: 0.1,
      species: "setosa",
    },
    {
      sepalLength: 5.5,
      sepalWidth: 4.2,
      petalLength: 1.4,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.9,
      sepalWidth: 3.1,
      petalLength: 1.5,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 3.2,
      petalLength: 1.2,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.5,
      sepalWidth: 3.5,
      petalLength: 1.3,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.9,
      sepalWidth: 3.6,
      petalLength: 1.4,
      petalWidth: 0.1,
      species: "setosa",
    },
    {
      sepalLength: 4.4,
      sepalWidth: 3.0,
      petalLength: 1.3,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.1,
      sepalWidth: 3.4,
      petalLength: 1.5,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 3.5,
      petalLength: 1.3,
      petalWidth: 0.3,
      species: "setosa",
    },
    {
      sepalLength: 4.5,
      sepalWidth: 2.3,
      petalLength: 1.3,
      petalWidth: 0.3,
      species: "setosa",
    },
    {
      sepalLength: 4.4,
      sepalWidth: 3.2,
      petalLength: 1.3,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 3.5,
      petalLength: 1.6,
      petalWidth: 0.6,
      species: "setosa",
    },
    {
      sepalLength: 5.1,
      sepalWidth: 3.8,
      petalLength: 1.9,
      petalWidth: 0.4,
      species: "setosa",
    },
    {
      sepalLength: 4.8,
      sepalWidth: 3.0,
      petalLength: 1.4,
      petalWidth: 0.3,
      species: "setosa",
    },
    {
      sepalLength: 5.1,
      sepalWidth: 3.8,
      petalLength: 1.6,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 4.6,
      sepalWidth: 3.2,
      petalLength: 1.4,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.3,
      sepalWidth: 3.7,
      petalLength: 1.5,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 3.3,
      petalLength: 1.4,
      petalWidth: 0.2,
      species: "setosa",
    },
    {
      sepalLength: 7.0,
      sepalWidth: 3.2,
      petalLength: 4.7,
      petalWidth: 1.4,
      species: "versicolor",
    },
    {
      sepalLength: 6.4,
      sepalWidth: 3.2,
      petalLength: 4.5,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 6.9,
      sepalWidth: 3.1,
      petalLength: 4.9,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 5.5,
      sepalWidth: 2.3,
      petalLength: 4.0,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 6.5,
      sepalWidth: 2.8,
      petalLength: 4.6,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 5.7,
      sepalWidth: 2.8,
      petalLength: 4.5,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 6.3,
      sepalWidth: 3.3,
      petalLength: 4.7,
      petalWidth: 1.6,
      species: "versicolor",
    },
    {
      sepalLength: 4.9,
      sepalWidth: 2.4,
      petalLength: 3.3,
      petalWidth: 1.0,
      species: "versicolor",
    },
    {
      sepalLength: 6.6,
      sepalWidth: 2.9,
      petalLength: 4.6,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 5.2,
      sepalWidth: 2.7,
      petalLength: 3.9,
      petalWidth: 1.4,
      species: "versicolor",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 2.0,
      petalLength: 3.5,
      petalWidth: 1.0,
      species: "versicolor",
    },
    {
      sepalLength: 5.9,
      sepalWidth: 3.0,
      petalLength: 4.2,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 6.0,
      sepalWidth: 2.2,
      petalLength: 4.0,
      petalWidth: 1.0,
      species: "versicolor",
    },
    {
      sepalLength: 6.1,
      sepalWidth: 2.9,
      petalLength: 4.7,
      petalWidth: 1.4,
      species: "versicolor",
    },
    {
      sepalLength: 5.6,
      sepalWidth: 2.9,
      petalLength: 3.6,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 6.7,
      sepalWidth: 3.1,
      petalLength: 4.4,
      petalWidth: 1.4,
      species: "versicolor",
    },
    {
      sepalLength: 5.6,
      sepalWidth: 3.0,
      petalLength: 4.5,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 5.8,
      sepalWidth: 2.7,
      petalLength: 4.1,
      petalWidth: 1.0,
      species: "versicolor",
    },
    {
      sepalLength: 6.2,
      sepalWidth: 2.2,
      petalLength: 4.5,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 5.6,
      sepalWidth: 2.5,
      petalLength: 3.9,
      petalWidth: 1.1,
      species: "versicolor",
    },
    {
      sepalLength: 5.9,
      sepalWidth: 3.2,
      petalLength: 4.8,
      petalWidth: 1.8,
      species: "versicolor",
    },
    {
      sepalLength: 6.1,
      sepalWidth: 2.8,
      petalLength: 4.0,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 6.3,
      sepalWidth: 2.5,
      petalLength: 4.9,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 6.1,
      sepalWidth: 2.8,
      petalLength: 4.7,
      petalWidth: 1.2,
      species: "versicolor",
    },
    {
      sepalLength: 6.4,
      sepalWidth: 2.9,
      petalLength: 4.3,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 6.6,
      sepalWidth: 3.0,
      petalLength: 4.4,
      petalWidth: 1.4,
      species: "versicolor",
    },
    {
      sepalLength: 6.8,
      sepalWidth: 2.8,
      petalLength: 4.8,
      petalWidth: 1.4,
      species: "versicolor",
    },
    {
      sepalLength: 6.7,
      sepalWidth: 3.0,
      petalLength: 5.0,
      petalWidth: 1.7,
      species: "versicolor",
    },
    {
      sepalLength: 6.0,
      sepalWidth: 2.9,
      petalLength: 4.5,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 5.7,
      sepalWidth: 2.6,
      petalLength: 3.5,
      petalWidth: 1.0,
      species: "versicolor",
    },
    {
      sepalLength: 5.5,
      sepalWidth: 2.4,
      petalLength: 3.8,
      petalWidth: 1.1,
      species: "versicolor",
    },
    {
      sepalLength: 5.5,
      sepalWidth: 2.4,
      petalLength: 3.7,
      petalWidth: 1.0,
      species: "versicolor",
    },
    {
      sepalLength: 5.8,
      sepalWidth: 2.7,
      petalLength: 3.9,
      petalWidth: 1.2,
      species: "versicolor",
    },
    {
      sepalLength: 6.0,
      sepalWidth: 2.7,
      petalLength: 5.1,
      petalWidth: 1.6,
      species: "versicolor",
    },
    {
      sepalLength: 5.4,
      sepalWidth: 3.0,
      petalLength: 4.5,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 6.0,
      sepalWidth: 3.4,
      petalLength: 4.5,
      petalWidth: 1.6,
      species: "versicolor",
    },
    {
      sepalLength: 6.7,
      sepalWidth: 3.1,
      petalLength: 4.7,
      petalWidth: 1.5,
      species: "versicolor",
    },
    {
      sepalLength: 6.3,
      sepalWidth: 2.3,
      petalLength: 4.4,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 5.6,
      sepalWidth: 3.0,
      petalLength: 4.1,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 5.5,
      sepalWidth: 2.5,
      petalLength: 4.0,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 5.5,
      sepalWidth: 2.6,
      petalLength: 4.4,
      petalWidth: 1.2,
      species: "versicolor",
    },
    {
      sepalLength: 6.1,
      sepalWidth: 3.0,
      petalLength: 4.6,
      petalWidth: 1.4,
      species: "versicolor",
    },
    {
      sepalLength: 5.8,
      sepalWidth: 2.6,
      petalLength: 4.0,
      petalWidth: 1.2,
      species: "versicolor",
    },
    {
      sepalLength: 5.0,
      sepalWidth: 2.3,
      petalLength: 3.3,
      petalWidth: 1.0,
      species: "versicolor",
    },
    {
      sepalLength: 5.6,
      sepalWidth: 2.7,
      petalLength: 4.2,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 5.7,
      sepalWidth: 3.0,
      petalLength: 4.2,
      petalWidth: 1.2,
      species: "versicolor",
    },
    {
      sepalLength: 5.7,
      sepalWidth: 2.9,
      petalLength: 4.2,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 6.2,
      sepalWidth: 2.9,
      petalLength: 4.3,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 5.1,
      sepalWidth: 2.5,
      petalLength: 3.0,
      petalWidth: 1.1,
      species: "versicolor",
    },
    {
      sepalLength: 5.7,
      sepalWidth: 2.8,
      petalLength: 4.1,
      petalWidth: 1.3,
      species: "versicolor",
    },
    {
      sepalLength: 6.3,
      sepalWidth: 3.3,
      petalLength: 6.0,
      petalWidth: 2.5,
      species: "virginica",
    },
    {
      sepalLength: 5.8,
      sepalWidth: 2.7,
      petalLength: 5.1,
      petalWidth: 1.9,
      species: "virginica",
    },
    {
      sepalLength: 7.1,
      sepalWidth: 3.0,
      petalLength: 5.9,
      petalWidth: 2.1,
      species: "virginica",
    },
    {
      sepalLength: 6.3,
      sepalWidth: 2.9,
      petalLength: 5.6,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 6.5,
      sepalWidth: 3.0,
      petalLength: 5.8,
      petalWidth: 2.2,
      species: "virginica",
    },
    {
      sepalLength: 7.6,
      sepalWidth: 3.0,
      petalLength: 6.6,
      petalWidth: 2.1,
      species: "virginica",
    },
    {
      sepalLength: 4.9,
      sepalWidth: 2.5,
      petalLength: 4.5,
      petalWidth: 1.7,
      species: "virginica",
    },
    {
      sepalLength: 7.3,
      sepalWidth: 2.9,
      petalLength: 6.3,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 6.7,
      sepalWidth: 2.5,
      petalLength: 5.8,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 7.2,
      sepalWidth: 3.6,
      petalLength: 6.1,
      petalWidth: 2.5,
      species: "virginica",
    },
    {
      sepalLength: 6.5,
      sepalWidth: 3.2,
      petalLength: 5.1,
      petalWidth: 2.0,
      species: "virginica",
    },
    {
      sepalLength: 6.4,
      sepalWidth: 2.7,
      petalLength: 5.3,
      petalWidth: 1.9,
      species: "virginica",
    },
    {
      sepalLength: 6.8,
      sepalWidth: 3.0,
      petalLength: 5.5,
      petalWidth: 2.1,
      species: "virginica",
    },
    {
      sepalLength: 5.7,
      sepalWidth: 2.5,
      petalLength: 5.0,
      petalWidth: 2.0,
      species: "virginica",
    },
    {
      sepalLength: 5.8,
      sepalWidth: 2.8,
      petalLength: 5.1,
      petalWidth: 2.4,
      species: "virginica",
    },
    {
      sepalLength: 6.4,
      sepalWidth: 3.2,
      petalLength: 5.3,
      petalWidth: 2.3,
      species: "virginica",
    },
    {
      sepalLength: 6.5,
      sepalWidth: 3.0,
      petalLength: 5.5,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 7.7,
      sepalWidth: 3.8,
      petalLength: 6.7,
      petalWidth: 2.2,
      species: "virginica",
    },
    {
      sepalLength: 7.7,
      sepalWidth: 2.6,
      petalLength: 6.9,
      petalWidth: 2.3,
      species: "virginica",
    },
    {
      sepalLength: 6.0,
      sepalWidth: 2.2,
      petalLength: 5.0,
      petalWidth: 1.5,
      species: "virginica",
    },
    {
      sepalLength: 6.9,
      sepalWidth: 3.2,
      petalLength: 5.7,
      petalWidth: 2.3,
      species: "virginica",
    },
    {
      sepalLength: 5.6,
      sepalWidth: 2.8,
      petalLength: 4.9,
      petalWidth: 2.0,
      species: "virginica",
    },
    {
      sepalLength: 7.7,
      sepalWidth: 2.8,
      petalLength: 6.7,
      petalWidth: 2.0,
      species: "virginica",
    },
    {
      sepalLength: 6.3,
      sepalWidth: 2.7,
      petalLength: 4.9,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 6.7,
      sepalWidth: 3.3,
      petalLength: 5.7,
      petalWidth: 2.1,
      species: "virginica",
    },
    {
      sepalLength: 7.2,
      sepalWidth: 3.2,
      petalLength: 6.0,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 6.2,
      sepalWidth: 2.8,
      petalLength: 4.8,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 6.1,
      sepalWidth: 3.0,
      petalLength: 4.9,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 6.4,
      sepalWidth: 2.8,
      petalLength: 5.6,
      petalWidth: 2.1,
      species: "virginica",
    },
    {
      sepalLength: 7.2,
      sepalWidth: 3.0,
      petalLength: 5.8,
      petalWidth: 1.6,
      species: "virginica",
    },
    {
      sepalLength: 7.4,
      sepalWidth: 2.8,
      petalLength: 6.1,
      petalWidth: 1.9,
      species: "virginica",
    },
    {
      sepalLength: 7.9,
      sepalWidth: 3.8,
      petalLength: 6.4,
      petalWidth: 2.0,
      species: "virginica",
    },
    {
      sepalLength: 6.4,
      sepalWidth: 2.8,
      petalLength: 5.6,
      petalWidth: 2.2,
      species: "virginica",
    },
    {
      sepalLength: 6.3,
      sepalWidth: 2.8,
      petalLength: 5.1,
      petalWidth: 1.5,
      species: "virginica",
    },
    {
      sepalLength: 6.1,
      sepalWidth: 2.6,
      petalLength: 5.6,
      petalWidth: 1.4,
      species: "virginica",
    },
    {
      sepalLength: 7.7,
      sepalWidth: 3.0,
      petalLength: 6.1,
      petalWidth: 2.3,
      species: "virginica",
    },
    {
      sepalLength: 6.3,
      sepalWidth: 3.4,
      petalLength: 5.6,
      petalWidth: 2.4,
      species: "virginica",
    },
    {
      sepalLength: 6.4,
      sepalWidth: 3.1,
      petalLength: 5.5,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 6.0,
      sepalWidth: 3.0,
      petalLength: 4.8,
      petalWidth: 1.8,
      species: "virginica",
    },
    {
      sepalLength: 6.9,
      sepalWidth: 3.1,
      petalLength: 5.4,
      petalWidth: 2.1,
      species: "virginica",
    },
    {
      sepalLength: 6.7,
      sepalWidth: 3.1,
      petalLength: 5.6,
      petalWidth: 2.4,
      species: "virginica",
    },
    {
      sepalLength: 6.9,
      sepalWidth: 3.1,
      petalLength: 5.1,
      petalWidth: 2.3,
      species: "virginica",
    },
    {
      sepalLength: 5.8,
      sepalWidth: 2.7,
      petalLength: 5.1,
      petalWidth: 1.9,
      species: "virginica",
    },
    {
      sepalLength: 6.8,
      sepalWidth: 3.2,
      petalLength: 5.9,
      petalWidth: 2.3,
      species: "virginica",
    },
    {
      sepalLength: 6.7,
      sepalWidth: 3.3,
      petalLength: 5.7,
      petalWidth: 2.5,
      species: "virginica",
    },
    {
      sepalLength: 6.7,
      sepalWidth: 3.0,
      petalLength: 5.2,
      petalWidth: 2.3,
      species: "virginica",
    },
    {
      sepalLength: 6.3,
      sepalWidth: 2.5,
      petalLength: 5.0,
      petalWidth: 1.9,
      species: "virginica",
    },
    {
      sepalLength: 6.5,
      sepalWidth: 3.0,
      petalLength: 5.2,
      petalWidth: 2.0,
      species: "virginica",
    },
    {
      sepalLength: 6.2,
      sepalWidth: 3.4,
      petalLength: 5.4,
      petalWidth: 2.3,
      species: "virginica",
    },
    {
      sepalLength: 5.9,
      sepalWidth: 3.0,
      petalLength: 5.1,
      petalWidth: 1.8,
      species: "virginica",
    },
  ];

  function onClick(detail: any) {
    console.log("on click: ", detail);
  }
</script>

<TablePagination
  tableColumns={irisColumns}
  tableBody={irisData}
  {searchableColumns}
  {sortableColumns}
  {isActionColumns}
  {actionsHtml}
  on:onClick={(e) => onClick(e.detail)}
/>

```
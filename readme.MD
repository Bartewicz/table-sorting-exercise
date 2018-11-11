# Sorting tables implementation

A simple static website for tables sorting implementation practice in VanillaJS.
Try it out [here](https://bartewicz.github.io/table-sorting-exercise/).

## Restrictions

All values gathered from a column meant to be sorted are stored in an array. Using default `array.sort()` method vaules are expected to be a string or a number. Here's the code used to sort table:

```js
const sorted_array = array_from_rows.sort(function (a, b) {
      a = a.cells[column_index].innerText.toLowerCase()
      b = b.cells[column_index].innerText.toLowerCase()
      return isNaN(a - b) ? a.localeCompare(b) : a - b
    })
```

## How does it work

Sorting table is encapsulated in window 'click' event lister. If an `event.target` is any of `th` cells the sorting procedure is started. A table head cell is given a `data-sorting-order` attribute with a value `'ascending'` on default and `'descending'` after second click on it. If same cell is clicked again the attribute value is toggled. If another `th` cell is clicked the dataset sorting attribute of previously sorted column header is removed.

Event listener that is mounted grabs the specified table depending on `th` cell that was clicked, so it does not matter how many tables are there in a HTML document.

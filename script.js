window.addEventListener('click', function (event) {
  if (event.target.tagName === 'TH') {
    const column_header = event.target
    const table = column_header.offsetParent
    const column_index = column_header.cellIndex
    const tbody = table.tBodies[0]
    const array_from_rows = Array.from(tbody.rows)

    const sorted_array = array_from_rows.sort(function (a, b) {
      a = a.cells[column_index].innerText.toLowerCase()
      b = b.cells[column_index].innerText.toLowerCase()
      return isNaN(a - b) ? a.localeCompare(b) : a - b
    })

    tbody.innerText = ''
    const previously_sorted = document.getElementsByClassName('sorted')[0]
    if (previously_sorted
      && (previously_sorted.innerText !== column_header.innerText)) {
      previously_sorted.removeAttribute('data-sorting-order')
      previously_sorted.classList.remove('sorted')
    }

    if (column_header.dataset['sortingOrder']
      && column_header.dataset['sortingOrder'] === 'ascending') {
      sorted_array.reverse().forEach(tr => tbody.appendChild(tr))
      column_header.dataset['sortingOrder'] = 'descending'
    } else {
      sorted_array.forEach(tr => tbody.appendChild(tr))
      column_header.dataset['sortingOrder'] = 'ascending'
    }
    column_header.classList.add('sorted')
  }
})
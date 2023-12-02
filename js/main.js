let table = function () {
    const div = document.querySelector('#table')
    const table = document.createElement('table');
    let number = 1;

    for(let rowNum = 0; rowNum < 10; rowNum ++) {
        const row = document.createElement('tr');
        for (let cellNum = 0; cellNum < 10; cellNum ++) {
            const cell = document.createElement('td');
            cell.textContent = number++;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    div.appendChild(table);
} ();
// table should be a table element
// type can be either 'add' or 'remove'
function addBtn(table, type) {
    var rows = table.rows;

    if (rows.length > 1) {
        for (i = 1; i < rows.length; i++) {
            var lastCell = rows[i].insertCell(-1);
            lastCell.classList.add('lastCell');
            lastCell.innerHTML += `<a class='${type}' href='#'>${type}</a>`;
        }
    }
}

// transfers rowEl from its original table to toTableEl
function transferRow(row, toTableElement) {
    var temp = row;
    row.remove();

    console.log(temp);
    toTableElement.appendChild(temp);
}

// Adds the 'remove row' effect when clicking on the anchor elements
function addBtnListener() {
    var btns = document.querySelectorAll('tr a');
    btns.forEach(btn => {
        btn.onclick = function (e) {
            e.preventDefault();
            row = this.parentElement.parentElement;
            row.remove();
        };
    });
}

var rows = document.getElementsByTagName('tr');

for (let i = 1; i < rows.length; i++) {
    var row = rows[i];
    var cell = row.insertCell(-1);
    var button = document.createElement('button');

    button.innerHTML = 'Remove';
    cell.appendChild(button);
    cell.style.border = 'none';
};

// delete specific row
$("button").click(function () {
    var input;
    if (input = confirm('Are you sure? All records of the student will be permanently deleted.')) {
        $(this).closest('tr').remove();
    }
});



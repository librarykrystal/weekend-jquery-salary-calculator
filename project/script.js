// console.log('JS file TEST');

$(document).ready(onReady);

function onReady(){
    // console.log('f onReady TEST');
    $('#submitBtn').on('click', addEmployee);
}

let employeesList = [];
let salaries = [];
let employeeInput;

function addEmployee(){
    // console.log('f addEmployee TEST');
    employeeInput = {
        first: $('#firstInput').val(),
        last: $('#lastInput').val(),
        idNum: $('#idNumInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        salary: $('#salaryInput').val(),
    }
    employeesList.push(employeeInput);
    salaries.push(employeeInput.salary);
    console.log('Employees:', employeesList);
    console.log('Salaries:', salaries);
    addToTable();
    $('#firstInput').val('');
    $('#lastInput').val('');
    $('#idNumInput').val('');
    $('#jobTitleInput').val('');
    $('#salaryInput').val('');
}

function addToTable(){
    // console.log('f addToTable TEST');
    $('#tableBody').append(`<tr>` + `<td>` + employeeInput.first + `</td>` + `<td>` + employeeInput.last + `</td>` + `<td>` + employeeInput.idNum + `</td>` + `<td>` + employeeInput.jobTitle + `</td>` + `<td>` + employeeInput.salary + `</td>` + `</tr>`);
}


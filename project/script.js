console.log('JS file TEST');

$(document).ready(onReady);

function onReady(){
    console.log('f onReady TEST');
    $('#submitBtn').on('click', addEmployee);
    // needs descendent selector?
}

let employeesList = [];

function addEmployee(){
    console.log('f addEmployee TEST');
    let employeeInput = {
        first: $('#firstInput').val(),
        last: $('#lastInput').val(),
        idNum: $('#idNumInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        salary: $('#salaryInput').val(),
    }
    employeesList.push(employeeInput);
    console.log(employeesList);
    addToTable();
    $('#firstInput').val('');
    $('#lastInput').val('');
    $('#idNumInput').val('');
    $('#jobTitleInput').val('');
    $('#salaryInput').val('');
}

function addToTable(){
    console.log('f addToTable TEST');
    for(let employee of employeesList){
    $('#tableBody').append(`<tr>` + `<td>` + employee.first + `</td>` + `<td>` + employee.last + `</td>` + `<td>` + employee.idNum + `</td>` + `<td>` + employee.jobTitle + `</td>` + `<td>` + employee.salary + `</td>` + `</tr>`);
    }
}



// function monthlyCostCalc (){
//     // Grab salary key from each object in main array
//     // add salaries to their own array, then loop through?
//     // Or loop through main array only grabbing salary values?
// }

// console.log('JS file TEST');

$(document).ready(onReady);

function onReady(){
    // console.log('f onReady TEST');
    $('#submitBtn').on('click', addEmployee);
    $('#tableBody').on('click', '#removeBtn', removeEmployeeRow);
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
    annualTotaller();
    monthlyTotaller();
    $('#firstInput').val('');
    $('#lastInput').val('');
    $('#idNumInput').val('');
    $('#jobTitleInput').val('');
    $('#salaryInput').val('');
}


function addToTable(){
    // console.log('f addToTable TEST');
    // $('#tableBody').append(`<tr>` + `<td>` + employeeInput.first + `</td>` + `<td>` + employeeInput.last + `</td>` + `<td>` + employeeInput.idNum + `</td>` + `<td>` + employeeInput.jobTitle + `</td>` + `<td>` + employeeInput.salary + `</td>` + `</tr>`);

    $('#tableBody').append(`<tr>` + `<td>` + employeeInput.first + `</td>` + `<td>` + employeeInput.last + `</td>` + `<td>` + employeeInput.idNum + `</td>` + `<td>` + employeeInput.jobTitle + `</td>` + `<td>` + employeeInput.salary + `</td>` + `<td>` + `<button id="removeBtn">REMOVE</button>` + `</td>` + `</tr>`);
}

function annualTotaller(){
    let annualSum = 0;
    // console.log('f annualSum TEST');
    $('#annualSum').empty();
    //for(let i=0; i<salaries.length; i++){
    //    annualSum+=parseInt(salaries[i]);
    //}
    // Not number. Try again.
    for(let emp of employeesList){
        annualSum += Number(emp.salary);
    }
    console.log('Annual sum:', annualSum);
    $('#annualSum').append(annualSum);
}

function monthlyTotaller(){
    let monthlySum = 0;
    // console.log('f annualSum TEST');
    $('#monthlySum').empty();
    for(let emp of employeesList){
        monthlySum += Number(emp.salary);
    }
    monthlySum /= 12;
    if(monthlySum > 20000){
        //console.log('Monthly limit TEST');
        //TO DO: if >20000, change background to red

    }
    console.log('Monthly sum:', monthlySum);
    $('#monthlySum').append(monthlySum);
}


function removeEmployeeRow(){
    // console.log('removeEmployee TEST');
    $(this).parent().parent().remove();
}
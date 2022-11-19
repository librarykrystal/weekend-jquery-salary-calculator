console.log('JS file TEST');

$(document).ready(onReady);

function onReady(){
    console.log('f onReady TEST');
    $('#submitBtn').on('click', addEmployee)
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
    // call next (render to DOM) function here
    $('#firstInput').val('');
    $('#lastInput').val('');
    $('#idNumInput').val('');
    $('#jobTitleInput').val('');
    $('#salaryInput').val('');
}

function monthlyCostCalc (){
    // Grab salary key from each object in main array
    // add salaries to their own array?
}


// going to need to... append to a table instead of a ul?
// so use backticks and write out <td> instead of <li>?
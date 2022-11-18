console.log('JS file TEST');

$(document).ready(onReady);

function onReady(){
    console.log('f onReady TEST');
    $('#addEmployee').on('click', addEmployee)
}

function addEmployee(){
    console.log('f addEmployee TEST');
}




// going to need to... append to a table instead of a ul?
// so use backticks and write out <td> instead of <li>?
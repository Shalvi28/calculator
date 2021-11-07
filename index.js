document.getElementsByClassName('number_button');


let result = '';
let operation = '';
let operation_new_number = '';

const number_button_clicked = e => {
    if(operation == '') {
        result += e.target.dataset.number;
        display(result);
    } else {
        operation_new_number += e.target.dataset.number;
        display(operation_new_number);
    }
};

const add_button_clicked = () => {
    operation = '+';
};
const subtract_button_clicked = () => {
    operation = '-';
};
const division_button_clicked = () => {
    operation = '/';
};

const multiplication_button_clicked = () => {
    operation = '*';
};



const equals_button_clicked = () => {
    if (operation == '+')
    {
    result = Number(result) + Number(operation_new_number);
    display(result);
}
else if (operation == '-')
{
result = Number(result) - Number(operation_new_number);
display(result);
}
else if (operation == '/')
{
result = Number(result) / Number(operation_new_number);
display(result);
}
else if (operation == '*')
{
result = Number(result) * Number(operation_new_number);
display(result);
}

else
operation =''
};

function reset_clicked () {
location.reload();
}; 
const display = (value) => {
    document.getElementById('display').innerText = value;
}




let add_button = document.getElementById('add_button')
add_button.addEventListener('click', add_button_clicked);

let subtract_button = document.getElementById('subtract_button')
subtract_button.addEventListener('click', subtract_button_clicked);

let division_button = document.getElementById('division_button')
division_button.addEventListener('click', division_button_clicked);

let multiplication_button = document.getElementById('multiplication_button')
multiplication_button.addEventListener('click', multiplication_button_clicked);

let equals_button = document.getElementById('equals_button');
equals_button.addEventListener('click', equals_button_clicked);



let reset = document.getElementById('reset');
reset.addEventListener('click', reset_clicked);

let number_buttons = document.querySelectorAll('.number_button');
number_buttons.forEach(single_number_button => {
    single_number_button.addEventListener('click', number_button_clicked);
});
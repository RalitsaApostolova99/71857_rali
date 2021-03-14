const body = document.body;
const ul = document.querySelector('#my-list');

function addItem(){
    const input = document.querySelector('#input');
    //debugger;
    const li = document.createElement('li');

    li.innerText = input.value;
    
    ul.appendChild(li);
    input.value = '';

    //to do - delete with removeChild and the button + calculator
}

function deleteItem(){
    
}
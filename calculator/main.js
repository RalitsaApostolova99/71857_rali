const body = document.body;


function calculate(){
    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');
    const option = document.querySelector('#option');
    let output = document.getElementById('o');
 
    if(option.value == '+'){
        output.innerText = Number(input1.value) + Number(input2.value);
    }
    if(option.value == '-'){
        output.innerText = Number(input1.value) - Number(input2.value);
    }
    if(option.value == '*'){
        output.innerText =Number(input1.value) * Number(input2.value);
    }
    if(option.value == '/' && Number(input2.value) != 0){
        output.innerText = Number(input1.value) / Number(input2.value);
    }
    if(option.value == '/' && Number(input2.value) == 0){
        output.innerText = 'Not possible!';
    }

    input1.value ='';
    input2.value='';
}
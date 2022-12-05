const numero1 = document.getElementById('num1');            //select nr1
const numero2 = document.getElementById('num2');                     //select nr2

const operation = document.getElementById('operation');

const bttn = document.getElementById('start');                      //select button for calculation
const solution = document.getElementById('result')
function calculation(evt) {
    evt.preventDefault();
    n1 = parseInt(numero1.value);
    n2 = parseInt(numero2.value);
    if (operation.value === "add"){
        solution.innerText = `Result is ${n1+n2}`;
    }
    else if(operation.value === "sub"){
        solution.innerText = `Result is ${n1-n2}`;
    }
    else if (operation.value === "multi"){
        solution.innerText = `Result is ${n1*n2}`;
    }
    else if (operation.value === "div"){
        solution.innerText = `Result is ${n1/n2}`;
    }
}
bttn.addEventListener('click', calculation);
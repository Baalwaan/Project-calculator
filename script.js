let screen = document.getElementsByTagName('output')[0];


let num1 = '';
let num2 = '';
let total;
let operatorSign;


// nodelist is array like
let numbers = document.getElementsByClassName('numbers');

// below turns numbers into a real array
let arr = [...numbers];

let clearBtn = document.getElementById('clear');


let operator = document.getElementsByClassName('operator');

let arrOperator = [...operator];


let showNumber = function(){

	screen.innerText += this.value;
	num1 = screen.innerText;	
}

let clearScreen = function(){
	screen.innerText = '0';

}


let setOperatorSign = function(){
	operatorSign = this.value;
}


let addEvent = function(index){
	if(arr[index].classList.contains('numbers')){
	arr[index].addEventListener('click', showNumber)}
}


let operatorEvent = function(index){
	
	arrOperator[index].addEventListener('click', setOperatorSign)
}


// iterates through each button to give it the ability to listen
arr.forEach(number =>
	addEvent(arr.indexOf(number)))

arrOperator.forEach(number =>
 operatorEvent(arrOperator.indexOf(number)));



clearBtn.addEventListener('click', clearScreen)
let total = 0;
let currentNum = '';
let  arr = [0];
let powerOn = true;
let equalPressed = false; 

let display = document.getElementById('display');
let totalDisplay = document.getElementById('total');

// buttons
let numberBtns = document.querySelectorAll('.numbers');
let operatorBtns = document.querySelectorAll('.operator');
let decimalBtn = document.querySelector('#decimal');
let equalsBtn = document.querySelector('#equals')
let clearBtn = document.querySelector('#clear');
let powerBtn = document.querySelector('#power');


// functions
const clearBtnFunc = () => {

if (powerOn){
	resetCurrentNum();
	equalPressed = false;
	display.innerHTML = '0';
	totalDisplay.innerHTML = '';
	total = 0;
	arr = [0];}
	else{/* do nothing and screen remains blank} */}
};
// functions

const powerFunc =()=>{
	resetCurrentNum();
	arr = [0];
	total = 0;

	if(powerOn){
		powerOn = false
		display.innerHTML = '';
		totalDisplay.innerHTML = '';
		
	}
	else{
		powerOn = true;
		display.innerHTML = '0';
	}
}

const clearDisplay = () => {
	// console.log('cleared'); 
	display.innerHTML = '';
}

const resetCurrentNum = () => currentNum = '';

const showNumFunc = (e) => {
	if(powerOn){

	if(display.innerHTML == totalDisplay.value && equalPressed){
		clearBtnFunc();
		// console.log('you been cleared');
	}

// when 0 is on screen and user presses 0 it does not do anything
	if(display.innerHTML == 0 && e.currentTarget.value == 0 || currentNum == '0' && e.currentTarget.value == 0){
	console.log('Hi, am zero')
		}

// in initial stge when 0 is showing and user presses a number it removes the 0 first
	else if(display.innerHTML == 0 && e.currentTarget.value > 0){
	
	currentNum += e.currentTarget.value;
	clearDisplay();
	arr.shift(), arr.push(e.currentTarget.value);
	display.innerHTML = arr.join('');

}
// just adds number to current number
	else{
	currentNum += e.currentTarget.value;
	clearDisplay();
	arr.push(e.currentTarget.value);
	display.innerHTML+= arr.join('')
		}
		}

		else{/* do nothing and screen remains blank} */}
};

const operatorFunc = (e) => {

	if(powerOn){
resetCurrentNum();
clearDisplay();	
	//if last character in display matches a special character(operator characters) it will be overriden by the new operator character user pressed 
	if(arr[arr.length-1].match(/\W+/g)){		
		arr.splice(-1, 1, e.currentTarget.value);		
		display.innerHTML = arr.join('');			}

	else{
		arr.push(e.currentTarget.value);
		display.innerHTML+= arr.join('');
			}
		}

		else{/* do nothing and screen remains blank} */}

};

const decimalFunc = (e) => {
if(powerOn){
	// checks to see if current number has a decimal. if it has it will alert user about e.currentTarget.
	if(currentNum.includes(e.currentTarget.value)){
		alert('You already have a decimal in your number!')
		}

	else{
		clearDisplay();
		currentNum += e.currentTarget.value;
		arr.push(e.currentTarget.value);
		display.innerHTML = arr.join('');
		
			}
}

					else{/* do nothing and screen remains blank} */}

	};

const calculate = () => {
	if (powerOn){
resetCurrentNum();
equalPressed = true;
total =  eval(display.innerHTML);

total.toString().includes('.') ? total = total.toFixed(4) : '';

console.log(total);
arr = (total).toString().split('');
display.innerHTML = (total).toString();
}
		else{/* do nothing and screen remains blank} */}

totalDisplay.innerHTML = (total).toString();
// this line >>> not working find out why? totalDisplay.innerHTML = `total is ${(total).toString()}`;

};


//eventListeners
numberBtns.forEach(e=>e.addEventListener('click', showNumFunc, false));

operatorBtns.forEach(e=>e.addEventListener('click', operatorFunc, false));

equalsBtn.addEventListener('click', calculate);
decimalBtn.addEventListener('click', decimalFunc);
clearBtn.addEventListener('click', clearBtnFunc);
powerBtn.addEventListener('click', powerFunc);

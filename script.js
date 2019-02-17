let total = 0;
let currentNum = '';
let  arr = [0];

let display = document.getElementById('display');

// buttons
let numberBtns = document.querySelectorAll('.numbers');
let operatorBtns = document.querySelectorAll('.operator');
let equalsBtn = document.querySelector('#equals')
let clearBtn = document.querySelector('#clear').addEventListener('click', () =>{
	resetCurrentNum();
	display.innerHTML = '0';
	arr = [0];
	total = 0;
});

// functions
const clearDisplay = () => display.innerHTML = '';
const resetCurrentNum = () => currentNum = '';

const showNumFunc = function(){
// when 0 is on screen and user presses 0 it does not do anything
if(display.innerHTML == 0 && this.value == 0){
	console.log('Hi, am zero')
		}

// in initial stge when 0 is showing and user presses a number it removes the 0 first
else if(display.innerHTML == 0 && this.value > 0){
	
	currentNum += this.value;
	clearDisplay();
	arr.shift(), arr.push(this.value);
	display.innerHTML = arr.join('');

}
// just adds number to current number
else{
	currentNum += this.value;
	clearDisplay();
	arr.push(this.value);
	display.innerHTML+= arr.join('')
		}
};

const operatorFunc = function(){
resetCurrentNum();
clearDisplay();
	
	//if last character in display matches a special character(operator characters) it will be overriden by the new operator character user pressed 
	if(arr[arr.length-1].match(/\W+/g)){		
		arr.splice(-1, 1, this.value);		
		display.innerHTML = arr.join('');			}

	else{
		arr.push(this.value);
		display.innerHTML+= arr.join('');
			}
};


const decimalFunc = function(){
	// checks to see if current number has a decimal. if it has it will alert user about this.
	if(currentNum.includes(this.value)){
		alert('You already have a decimal in your number!')
		}

	else{
		clearDisplay();
		currentNum += this.value;
		arr.push(this.value);
		display.innerHTML = arr.join('');
		
			}
	};

const calculate = function(){
resetCurrentNum();
total = eval(display.innerHTML);
console.log(total);
arr = (total).toString().split('');
display.innerHTML = (total).toString();
};


//eventListeners
numberBtns.forEach(e=>e.addEventListener('click', showNumFunc));

operatorBtns.forEach(e=>e.addEventListener('click', operatorFunc));

equalsBtn.addEventListener('click', calculate);

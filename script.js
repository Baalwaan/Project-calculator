display = document.getElementById('display');
numbers = document.querySelectorAll('.numbers');
operators = document.querySelectorAll('.operator');


equals = document.getElementById('equals').addEventListener('click', function(){
display.innerHTML = eval(display.innerHTML).toFixed(2);
})

decimal = document.getElementById('decimal').addEventListener('click', decimalFunc);

clear = document.getElementById('clear').addEventListener('click', function(){
	// resetCurrentNum();
	arr = [0];
	display.innerHTML = '0'})


var arr = [0];



let showOnScreen = function(){
// when 0 is on screen and user presses 0 it does not do anything
if(display.innerHTML == 0 && this.value == 0){
	console.log('am zero')
		}

// in initial stge when 0 is showing and user presses a number it removes the 0 first
else if(display.innerHTML == 0 && this.value > 0){
	
	clearDisplay();
	arr.shift();
	arr.push(this.value);
	display.innerHTML = arr.join('');
}
// just adds number to current number
else{
	
	clearDisplay();
	arr.push(this.value);
	display.innerHTML+= arr.join('')
		}
}

let operatorFunc = function(){
clearDisplay();

	if(arr[arr.length-1].match(/\W+/g)){
		
		arr.splice(-1, 1, this.value);		
		display.innerHTML = arr.join('');
			}

	else{

		arr.push(this.value);	
		display.innerHTML+= arr.join('');
			}
}


function clearDisplay(){
	display.innerHTML = '';
}



function decimalFunc(){
	// checks to see if current number has a dot. if it has it wont do nothing 
	if(currentNum.includes(this.value)){
		alert('You already have a decimal point in your number!')
	}

// otherwise 
	else{
		currentNum += this.value;
		display.innerHTML += this.value;
		console.log(this.value)
	}
	display.innerHTML;

}



numbers.forEach(e=>e.addEventListener('click', showOnScreen))
operators.forEach(e=>e.addEventListener('click', operatorFunc))
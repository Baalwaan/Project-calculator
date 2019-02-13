let output;
currentNum = '';


display = document.getElementById('display');
numbers = document.querySelectorAll('.numbers');
operators = document.querySelectorAll('.operator');


equals = document.getElementById('equals').addEventListener('click', function(){
display.innerHTML = eval(display.innerHTML);
})

decimal = document.getElementById('decimal').addEventListener('click', decimalFunc);

clear = document.getElementById('clear').addEventListener('click', function(){
	resetCurrentNum();
	display.innerHTML = '0'})






let showOnScreen = function(){
if(currentNum.match(/\W+/g)) {
	resetCurrentNum();
}
// when 0 is on screen and user presses 0 it does not do anything
if(display.innerHTML == 0 && this.value == 0){console.log('am zero')}
// current number checker
if(currentNum == 0 && this.value == 0){console.log('I am also a zero')}
// in initial stge when 0 is showing and user presses a number it removes the 0 first

else if(display.innerHTML == 0 && this.value > 0){
	
	display.innerHTML='';
	currentNum+=this.value;
	display.innerHTML+=this.value;
}
// just adds number to current number
else{
	currentNum+=this.value
	display.innerHTML+= this.value;
}

}



function resetCurrentNum(){
	currentNum = '';

}
let operatorFunc = function(){

	if(display.innerHTML[display.innerHTML.length-1].match(/\W+/g)){
		display.innerHTML = display.innerHTML.replace(display.innerHTML[display.innerHTML.length-1], this.value)
		

	}

	else{
		currentNum+= this.value;
		display.innerHTML+=this.value;

	}
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
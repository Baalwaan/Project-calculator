let output;
currentNum = '';


display = document.getElementById('display');
// this is an array like object
numbers = document.querySelectorAll('.numbers');
// turns numbers into a real array so we can add events
// numbers = [...numbers];

operators = document.querySelectorAll('.operator');


calculate = document.getElementById('equals').addEventListener('click', function(){
display.innerHTML = eval(display);
})


let showOnScreen = function(){

currentNum = this.value

if(display.innerHTML == 0 && currentNum == 0){''}

else if(display.innerHTML == 0 && currentNum > 0){
	display.innerHTML = '';
	output = display.innerHTML+= currentNum
}

else{output = display.innerHTML+= currentNum}


}



let operatorFunc = function{
currentNum = '';


}


numbers.forEach(e=>e.addEventListener('click', showOnScreen))
operators.forEach(e=>e.addEventListener('click', showOnScreen))
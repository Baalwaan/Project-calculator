let screen = document.getElementsByTagName('output')[0];


let num1 = '';
let num2 = '';
let total;


// nodelist is array like
let numbers = document.getElementsByClassName('numbers');

// below turns numbers into a real array
let arr = [...numbers];

let clearBtn = document.getElementById('clear');



let showNumber = function(){
	// if(screen.innerText.length >= 10){alert('no more input!')}
	screen.innerText += this.value;
	num1 = screen.innerText;
}

let clearScreen = function(){
	screen.innerText = '0';

}

let addEvent = function(index){
	numbers[index].addEventListener('click', showNumber)
}


// iterates through each button to give it the ability to listen
arr.forEach(function(number){
	addEvent(arr.indexOf(number));
})

clearBtn.addEventListener('click', clearScreen)




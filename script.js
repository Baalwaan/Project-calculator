let screen = document.getElementsByTagName('output')[0];

// nodelist is array like
let numbers = document.getElementsByClassName('numbers');

// below turns numbers into a real array
let arr = [...numbers];


let showNumber = function(){
	console.log(this.value)
}

let addEvent = function(index){
	numbers[index].addEventListener('click', showNumber)
}


// iterates through each button to give it the ability to listen
arr.forEach(function(number){
	addEvent(arr.indexOf(number));
})

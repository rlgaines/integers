
// function myFunction() {
// 	var num = document.getElementById('number').value;
//     // document.getElementById("onCick").submit();
//     console.log(num)

// };

var random = Math.floor((Math.random()*100)+1);
	console.log(random)


// var submit = parseInt(myFunction());

var buttonClick = document.getElementById("onClick");

function answer(num, guess){
	if (num > guess){
		alert("Too low")
	}
	else if(num < guess){
		alert("You're Too High... Literally")
	}
	else if(num === guess){
		alert("Nicely Done!")
	}
	else{
		alert("Not even close, try again!")
	}
}

buttonClick.addEventListener('click', function(){
	var num = document.getElementById('number').value;
    console.log(num);
var submit = parseInt(num);
	answer(random, submit);
});


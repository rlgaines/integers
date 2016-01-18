
// MATH RANDOM FORMULA

// function random(){
// 	return Math.floor((Math.random()*100)+1);
// };

// var myfun= random();

//solution even numbers with random number

// for (i=0; i<myfun; i++){
// 	if (!(i%2)){
// 		console.log(i)
// 	};
// 	};

//solution for under/over 40

// function greater(){
// for (i=40; i<myfun; i++){
// 	if (!!(i%2)){
// 			console.log(i)

// 	};
// };
// };
// function smaller(){
// for (i=0; i<myfun; i++){
// 	if (!!(i%2)){
// 			console.log(i)
// };
// };
// };
// function answer(input){
// 	if (input>40){
// 		greater();
// 	};
// 	if(input<40){
// 		smaller();
// 	};

// };

// answer(myfun);


//solution twenty random integers

function random(){
	return Math.floor((Math.random()*100)+1);
};

var myfun= random();
var totalIntegers = 20;
var startingInt = 1;
var myNumbers = [];

// while (startingInt<= totalIntegers){
// 	var myNumbers = console.log(random());
// 	startingInt++;


	for (i=1; i<=totalIntegers; i++){
	myNumbers.push(random());
};
var sorted = myNumbers.sort();

console.log(sorted[0], sorted[19]);









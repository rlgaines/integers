function random(){
	return Math.floor((Math.random()*8999)+1000);
};

	var myfun= random().toString().split("");
		
		var sum = 0;
	// for(i=0; i<=myfun.length-1; i++){
	// 	myfun[i];
	// 	sum = sum+ parseInt(myfun[i])
	// }


	

		// console.log(sum);
	console.log(myfun);
for (var i=3; i>=0; i--){
	var sum = 0;
	for(j=0; j<=myfun.length-1; j++){
		sum = sum+ parseInt(myfun[j]);
	};
	console.log("sum", sum);
	myfun.shift();
	console.log("after popping", myfun);
}


// console.log(myfun);

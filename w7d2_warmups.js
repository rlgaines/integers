function XOtester(str){
	var array = [];
	var array2 = [];
	for(i=0; i<str.length; i++){
		if(str[i]==='x'){
			array.push(str[i])
		} else if (str[i]==='o'){
			array2.push(str[i])
		} 

	}
	console.log(array)
	console.log(array2)

	if (array.length === array2.length){
			console.log('true');
	} else {
			console.log('false');
		}
	

}

XOtester("xxxooo");
XOtester("xxooo");
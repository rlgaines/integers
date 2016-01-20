var str = "this is a string mother fricker"

var split = str.split(" ").join(",")
var array = []

for (i=0; i<split.length; i++){
	array.push(split);
};
console.log(array)
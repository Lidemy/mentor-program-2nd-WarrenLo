function join(str, concatStr) {
	var str_length = str.length;
	var output = "";
	for (var i = 0; i < 2*str_length-1; i++){
		if (i % 2 ==0){
			output += str[i/2];
		}
		if (i % 2 ==1){
			output += concatStr;
		}
	}
	return output;
}

var result_1 = join([1, 2, 3], '');
var result_2 = join(["a", "b", "c"], "!");
var result_3 = join(["a", 1, "b", 2, "c", 3], ',');
console.log(result_1, result_2, result_3);

function repeat(str,  times){
	var output = "";
	for ( var i = 1; i <= times; i++){
		output += str;
	}
	return output;
}

var result_1 = repeat ("a", 5);
var result_2 = repeat ("yoyo", 2);
console.log(result_1, result_2);
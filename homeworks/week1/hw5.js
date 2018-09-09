function join(str, concatStr) {
	var str_length = str.length;
	var output = ""
	for (var i = 0; i < str_length; i++){
		var output_each = str[i]+concatStr;
		output += output_each;
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

var result_4 = repeat ("a", 5);
var result_5 = repeat ("yoyo", 2);
console.log(result_4, result_5);
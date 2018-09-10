function capitalize(str){
	var first_str = str[0];
	var capital_first_str = first_str.toUpperCase();
	var n = str.length ;
	
	var output = capital_first_str + str.substring(1,n);	
	return output;
	
}


var result_1 = capitalize("nick");
var result_2 = capitalize("Nick");
var result_3 = capitalize(",hello");
console.log(result_1, result_2, result_3);
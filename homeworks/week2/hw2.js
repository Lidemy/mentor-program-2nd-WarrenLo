function alphaSwap(str) {
	var output = "";
	for (var i  = 0; i < str.length; i++){
		var str_each = str[i];
		var rev_str = "";
		
		 //判斷是否為大寫
		if (str_each === str_each.toUpperCase()){
			rev_str =  str_each.toLowerCase();
		}
		// 判斷是否為小寫
		else{
			rev_str =  str_each.toUpperCase();
		}
		output += rev_str;
	}
	return output;
}

module.exports = alphaSwap
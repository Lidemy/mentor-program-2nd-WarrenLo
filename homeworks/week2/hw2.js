function alphaSwap(str) {
	var output = "";
	for (var i  = 0; i < str.length; i++){
		var str_each = str[i];
		var rev_str = "";
		
		 //�P�_�O�_���j�g
		if (str_each === str_each.toUpperCase()){
			rev_str =  str_each.toLowerCase();
		}
		// �P�_�O�_���p�g
		else{
			rev_str =  str_each.toUpperCase();
		}
		output += rev_str;
	}
	return output;
}

module.exports = alphaSwap
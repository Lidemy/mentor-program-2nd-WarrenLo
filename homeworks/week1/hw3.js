function reverse(str){
	var str_reverse = "";
	console.log("input: " + str);
	for(var  i = str.length -1; i>=0; i--){
		str_reverse += str[i];
	}
	console.log("output: " +str_reverse);
}

reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');


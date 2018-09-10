function printFactor(n){
	console.log("input : " + n);
	console.log("output : ")
	for(var i = 1; i <= n; i++){
	
		if (n%i == 0){
			console.log(i);
		}
		else{
		}
	}
}

printFactor(10);
printFactor(7);
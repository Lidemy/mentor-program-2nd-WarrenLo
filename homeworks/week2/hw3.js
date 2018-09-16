function isPrime(n) {
	var factor = 0;
	for(var i=1; i<=n; i++){
		if(n % i == 0){
			factor +=1;
		}
	}
		return factor == 2;
}
module.exports = isPrime
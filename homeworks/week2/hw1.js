function stars(n){

	var output = [];

	for (var i = 1; i<=n; i++){

		var star = "*";

		var j = 1;

		while(j < i){

			star +="*";

			j++;

		}

		output[i-1] = star;

	}
	
	return output;

}



module.exports = stars;
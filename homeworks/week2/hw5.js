function add(a,b){
	// step 1. �Na,b��Ӧr��Hslipt��C�ӼƦr��Jarray
	// �A��reverse��array����
	var arr_a = a.split("").reverse();
	var arr_b = b.split("").reverse();
	// step 2. ����u��array�� "0" �ɻ���P�˦��
	if (a.length > b.length){
		var n = a.length -1;
		for ( var r = 1; r <= a.length -b.length; r++){
			arr_b.push("0");
		}
	}
	else{
		var n = b.length-1;
		for ( var r = 1; r <=b.length -a.length; r++){
			arr_a.push("0");
		}
	}
	// ��parseInt�Nstring�ରint
	// �C�Ӧ�Ƭۥ[
	// �p�G�ۥ[���G�j�󵥩� 10 �h�i��
	// �p�G�̰���ƭn�i�� .push(1)
	var output = [];
	var carry = 0;
	for ( var i = 0; i <= n; i++){
		var cal = parseInt(arr_a[i],10) + parseInt(arr_b[i],10) + carry;
		if (cal >= 10){
			output.push(cal -10);
			carry = 1;
		}
		else {
			output.push(cal);
			carry = 0;
		}
	}
	if (carry ==1){
		output.push(1);
	}
	
	return output.reverse().join("");
}

module.exports = add;
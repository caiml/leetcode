var romanToInt = function(s){
	const roman={
		"I":1,
		"V":5,
		"X":10,
		"L":50,
		"C":100,
		"D":500,
		"M":1000,
		"IV":4,
		"IX":9,
		"XL":40,
		"XC":90,
		"CD":400,
		"CM":900,
	}
	var sum=0;
	var arr=s.split("");
	for(var i=0;i<arr.length;i++){
		var str=arr[i];
		var nextStr=arr[i+1];
		if(roman.hasOwnProperty(str+nextStr)){
			sum+=roman[str+nextStr];
			i++;
			continue;
		}
		sum+=roman[str];

	}
	return sum;
}
var s="IV";
console.log(romanToInt(s));
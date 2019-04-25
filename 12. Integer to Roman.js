var intToRoman = function(num) {
	var M=["","M","MM","MMM"];//千位
	var C=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];//百位
	var X=["","X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]//十位
	var I=["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]//个位
	return M[parseInt(num/1000)]+C[parseInt((num%1000)/100)]+X[parseInt((num%100)/10)]+I[parseInt(num%10)];
    
};
var a=4;
console.log(intToRoman(a));
console.log(parseInt(4/1000));


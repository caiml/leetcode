var longestPalindrome = function(s) {
	//考虑到在寻找回文的时候，可能会出现回文长度为奇数的情况和偶数的情况
	//它们分别以中心一个字母展开和两个字母展开
	var max="";
	for(var i=0;i<s.length;i++){//i相当于对每个字符进行遍历
		for(var j=0;j<2;j++){//这里的j遍历了出现奇数回文的情况和出现偶数回文的情况
			var left=i;
			var right=i+j;
			while(left>=0&&s[left]==s[right]){
				left--;
				right++;
			}
			//每次遍历完后都要将结果与上一次存放的最大回文比较
			if((right-left-1)>max.length){
				max=s.substring(left+1,right);
			}

		}

	}
	return max;
}
    


var a="babad";
console.log(longestPalindrome(a));
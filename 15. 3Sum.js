var threeSum = function(nums) {
	var result=[];
	nums.sort(function(a,b){
		return a-b;//实现数组从小到大排序
	})
	// console.log(nums);
	if(nums.length<3){
		return [];
	}
	for(var i=0;i<nums.length-2;i++){
		if(i>0&&nums[i]==nums[i-1]){
			continue;//去除掉重复项
		}
		var sum=-nums[i];
		var left=i+1;
		var right=nums.length-1;
		while(left<right){
			//从两头开始查找满足条件的2sum
			if(nums[left]+nums[right]==sum){
				var res=[];
				res.push(nums[i],nums[left],nums[right]);
				result.push(res);
				//排除在2位数加法中有重复的现象
				while(left<right&&nums[left++]==nums[left]){};
				while(left<right&&nums[right--]==nums[right]){};
			}else if(nums[left]+nums[right]<sum){
				while (left < right && nums[left++] == nums[left]) {}
			}else {
				while (left < right && nums[right--] == nums[right]) {}
			}
			

		}
	}
	return result;

    
};

var a=[-1, 0, 1, 2, -1, -4];
console.log(threeSum(a));
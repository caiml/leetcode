var fourSum = function(nums, target) {
	//最直观的思路，是在3sum上加上一重循环//但是这样做会超时//先对数组进行排序// var result=[];
	if(nums.length<4){
		return [];
	}
	// nums.sort(function(a,b){// 	return a-b;// })
	 nums.sort((a,b)=>a-b);//得到从小到大的排列，注意return只在用大括号将其包裹起来的时候才会使用
	for(var i=0;i<nums.length-3;i++){//确定第一个数字.注意去掉重复项
		if(i>0&&nums[i]==nums[i-1]){
			continue;
		}
		for(var j=i+1;j<nums.length-2;j++){//确定第二个数字，注意去掉重复项
			if(j!=i+1&&nums[j]==nums[j-1]){ 
				continue;
			}
			var sum2=target-nums[i]-nums[j];
			var left=j+1;
			var right=nums.length-1;
			while(left<right){
				if(nums[left]+nums[right]==sum2){
					var res=[];
					res.push(nums[i],nums[j],nums[left],left[right]);// result.push(res);
				}else if(nums[left]+nums[right]<sum2){//这里同样需要考虑去重的问题
					while(left<right&&nums[left++]==nums[left]){};//不管有无去重，都对标号进行了操作

				}else {
					while(left<right&&nums[right--]==nums[left]){};
				}
			}
		}

	}
	return res;
    
};


var a=[1, 0, -1, 0, -2, 2];
console.log(fourSum(a,0));
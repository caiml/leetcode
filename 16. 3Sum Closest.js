var threeSumClosest = function(nums, target) {
	//实现思路和第15题类似
	nums.sort((a,b)=> a-b); //从小到大排序
	// console.log(nums);
	var sum=0;
	var minCha=Number.MAX_VALUE;//要定义一个最大值，其他值才会比它小
	var res=0;
	for(var i=0;i<nums.length-2;i++){
		var left=i+1;
		var right=nums.length-1;
		while(left<right){
			sum=nums[i]+nums[left]+nums[right];
			if(Math.abs(sum-target)<minCha){
				minCha=Math.abs(sum-target);
				res=sum;//当循环完后要保存那个最接近值
			   
		    }
		    if(sum==target){
		    	return target;
		    }else if(sum<target){
		    	left++;
		    }else{
		    	right--;
		    }
		}
	}
	return res;

    
};

var a=[1,1,1,0];
 console.log(threeSumClosest(a,-100));

var search = function(nums, target) {
	//因为就某点旋转，则肯定两段有序的数组,有序段从小到大排列
	var low=0;
	var high=nums.length-1;
	while(low<=high){
		var mid=low+Math.floor((high-low)/2);
		if(nums[mid]==target){
			return mid;
		}

		if(nums[low]<=nums[mid]){//这一部分是有序的
	       if(nums[low]<=target&&target<=nums[mid]){
	       	//目标值在这一区域
	       	high=mid-1;

	       }
	       else{
	       	low=mid+1;
	       }

		}else {
			//说明mid右半部分是有序的
			if(nums[mid]<=target&&target<=nums[high]){
				low=mid+1;
			}else {
				high=mid-1;
			}

		}
	}
    return -1;
};
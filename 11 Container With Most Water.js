var maxArea = function(height) {
	if(height.length<2){
		return;
	}
	var max=0//定义一个存储最大水容量的量
	for(var i=0;i<height.length;i++){
		for(var j=i+1;j<height.length;j++){
			var width=j-i;
			var hei=Math.min(height[i],height[j]);
			max=Math.max(width*hei,max);
		}
	}
	return max;
    
};

var a=[1,8,6,2,5,4,8,3,7];
console.log(maxArea(a));
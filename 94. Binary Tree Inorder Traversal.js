function TreeNode(val){
	this.val=val;
	this.left=this.right=null;
}
//构建二叉树
function consturctTree(arr){
	if(arr.length===0){
		return new TreeNode(0);
	}
	//定义一个队列，实现队尾入队，队头出队
	var nodeQuene=[];
	//创建一个根节点
	var root=new TreeNode(arr[0]);
	//将根节点入队
	nodeQuene.push(root);
	var cur;
	var lineNodeNum=2;//定义当前行节点的数量（注意不一定是2的幂，而是上一行中非空节点的数量*2）
	var startIndex=1;//记录当前行中数字在数组中开始的位置
	var restLength=arr.length-1;//记录数组中剩余元素的数量
	while(restLength>0){
		//只有最后一行可以不满，其余必须是满的
		for(var i=startIndex;i<startIndex+lineNodeNum;i+=2){
			if(i==arr.length){//当arr里面的数字遍历完，应返回根节点所带的树
				return root;
			}
			cur=nodeQuene.shift();//对头出队列,注意此时出的元素也是树节点
			if(arr[i]!=null){
				cur.left=new TreeNode(arr[i]);
				nodeQuene.push(cur.left);

			}
			if(i+1==arr.length){
				//同上，说明已经将arr里面的数字遍历完了
				return root;
			}
			if(arr[i+1]!=null){
				cur.right=new TreeNode(arr[i+1]);
				nodeQuene.push(cur.right);
			}
		}
		startIndex+=lineNodeNum;
		restLength-=lineNodeNum;
		lineNodeNum=nodeQuene.length*2;//下一行树的元素个数
	}
	return root;	
}
var inorderTraversal = function(root) {
    const list = [];
    function _inorder(root) {
        if (!root) return;
        _inorder(root.left);
        list.push(root.val);
        _inorder(root.right);
    }
    _inorder(root);
    return list;
};
// var result=[];
// var inorderTraversal = function(root) {
// 	//采用递归的方法 中序遍历的流程是左子树，根节点，右子树
// 	if(!root){
// 		return [];
// 	}
// 	// var result=[];
// 	var head=root.val;
// 	result=result.concat(inorderTraversal(root.left));
// 	  result=result.push(head);
// 	 // result=result.concat();
// 	 result=result.concat(inorderTraversal(root.right));
// 	return result;   
// };
console.log(_inorder(consturctTree([1])));
// console.log(_inorder(consturctTree([1,1,2,3])));

// TreeNode.prototype.init=function(arr){//二叉排序树
// 	for(var i=0;i<arr.length;i++){
// 		var data=arr[i];
// 		var node = new TreeNode(data);
// 		if(this.root == null){
// 			this.root = node;
// 		}else{
// 			var current = this.root;
// 			var parent;
// 			while(true){
// 				parent = current;
// 				if(data < current.data){
// 					current = current.left;
// 					if(current == null){
// 						parent.left = node;
// 						break;
// 					}
// 				}else{
// 					current = current.right;
// 					if(current == null){
// 						parent.right = node;
// 						break;
// 					}
// 				}
// 			}
// 		}
// 	}
// }
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

// var preorderTraversal = function(root) {
// 	//最常用的方法是递归的思想，先序遍历是根，左子树，右子树
// 	var result=[];
// 	if(!root){
// 		return [];
// 	}
// 	result.push(root.val);
// 	result=result.concat(preorderTraversal(root.left));//concat方法不会改变现有的数组，而是返回一个副本
// 	result=result.concat(preorderTraversal(root.right));
// 	return result;
    
// };

var preorderTraversal=function(root){
	//第二种方法是回溯方法，可以用栈的后进先出的特性，先将根节点放入最终的结果，再将右子树先放入栈中，最后弹出
	if(root==null){
		return [];
	}
	if(root.left==null&&root.right===null){
		return [root.val];
	}
	var stack=[];
	var cur=null;
	var out=[];
	stack.push(root);
	while(cur=stack.pop()){
		out.push(cur.val);
		if(cur.right){
			stack.push(cur.right);
		}
		if(cur.left){
			stack.push(cur.left);
		}
	}
	return out;
}

var a=new TreeNode(0);
console.log(preorderTraversal(consturctTree([1,null,2,3])));
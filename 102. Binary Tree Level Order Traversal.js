function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
//构建二叉树
function consturctTree(arr) {
    if (arr.length === 0) {
        return new TreeNode(0);
    }
    //定义一个队列，实现队尾入队，队头出队
    var nodeQuene = [];
    //创建一个根节点
    var root = new TreeNode(arr[0]);
    //将根节点入队
    nodeQuene.push(root);
    var cur;
    var lineNodeNum = 2; //定义当前行节点的数量（注意不一定是2的幂，而是上一行中非空节点的数量*2）
    var startIndex = 1; //记录当前行中数字在数组中开始的位置
    var restLength = arr.length - 1; //记录数组中剩余元素的数量
    while (restLength > 0) {
        //只有最后一行可以不满，其余必须是满的
        for (var i = startIndex; i < startIndex + lineNodeNum; i += 2) {
            if (i == arr.length) { //当arr里面的数字遍历完，应返回根节点所带的树
                return root;
            }
            cur = nodeQuene.shift(); //对头出队列,注意此时出的元素也是树节点
            if (arr[i] != null) {
                cur.left = new TreeNode(arr[i]);
                nodeQuene.push(cur.left);

            }
            if (i + 1 == arr.length) {
                //同上，说明已经将arr里面的数字遍历完了
                return root;
            }
            if (arr[i + 1] != null) {
                cur.right = new TreeNode(arr[i + 1]);
                nodeQuene.push(cur.right);
            }
        }
        startIndex += lineNodeNum;
        restLength -= lineNodeNum;
        lineNodeNum = nodeQuene.length * 2; //下一行树的元素个数
    }
    return root;
}

var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const items = []; //用于存放所有节点
    const quene = [root, null];
    let levelNode = []; //用于存放每一层的节点

    while (quene.length > 0) {
        //出队列
        const t = quene.shift(); //用于把数组的第一个元素从其中删除，并返回第一个元素的值
        if (t) {
            //不是null，将其左右子树入队列
            levelNode.push(t.val);
            if (t.left) {
                quene.push(t.left);
            }
            if (t.right) {
                quene.push(t.right);
            }
        } else {
            //t为空，代表本层已经结束
            //将这一层push到最终结果
            items.push(levelNode);
            levelNode = [];
            //再次判断当前队列是否为null，不为空继续入队一个null
            if (quene.length > 0) {
                quene.push(null);
            }
        }
    }
    return items;

}
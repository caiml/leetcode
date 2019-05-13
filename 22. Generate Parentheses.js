var generateParenthesis = function(n) {
    //用递归回溯的方法直接生成所有合法的组合。所谓合法是指
    //1.无论任何时候，左括号的数量大于等于右括号的数量，这是考虑到了括号的有效性
    //2.左右括号数最终保持一致并且括号字符串的长度等于2*n，这是成功的条件
    var res = [];
    var generate = function(Str = "", left = 0, right = 0) {
        //成功的条件
        if (Str.length === 2 * n) {
            res.push(Str);
            return;
        }
        //考虑到会先输入左括号，所以先对左括号进行递归，随后右括号递归，当右括号不满足条件时回溯到左括号
        if (left < n) {
            generate(Str + "(", left + 1, right); //在进行这一块递归的时候是会实行下面一个if语句的
        }
        if (right < left) {
            generate(Str + ")", left, right + 1);
        }

    }
    generate();
    return res;

};
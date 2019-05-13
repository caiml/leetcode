var letterCombinations = function(digits) {
    //采用回溯法来解决问题
    let letterMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    if (digits === "") {
        return [];
    }
    let out = [];
    let pools = [];
    //首先进行大的字母的循环，看输入的一共有多少个字母
    for (let i = 0; i < digits.length; i++) {
        //将它对应的字母序列一个个Push到pools中
        let letters = letterMap[digits[i]];
        pools.push(letters); //例如输入23，则此时pools里面的值是["abc","def"]
    }

    //下面应该对每个字符进行回溯，思想类似于深度优先遍历，方法是递归，比如先考虑a，然后遍历完def后再回溯到上一层b，然后再继续
    backtrack(out, "", pools, 0, digits.length);
    return out;
};

var backtrack = function(out, combination, pools, poolIndex, size) {
    //递归结束的条件,其中size为按键输入的个数，combination为融合的数量
    if (combination.length == size) {
        out.push(combination);
        return;
    }
    //下面对其中每串字符的每个字母进行递归
    for (let i = 0; i < pools[poolIndex].length; i++) {
        //得到它的对应位字符，注意每一次循环实际上都回溯了当第一个数字为a时后面的所有结果，然后才会加1到B
        let letter = pools[poolIndex][i];
        backtrack(out, combination + letter, pools, poolIndex + 1, size);
    }

}
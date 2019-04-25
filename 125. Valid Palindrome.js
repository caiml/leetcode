var isPalindrome = function(s) {
    //首先先整理不规则的字符串，将其非正常字符的替代掉，并全部改成大小写一致
    var clean=s.replace(/[^a-zA-Z0-9]/,"").toLowerCase();
    return clean===clean.split("").reverse().join("");
};

var a="as de as";
console.log(isPalindrome(a));


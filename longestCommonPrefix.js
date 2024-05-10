function longestCommonPrefix (strs) {
    console.log(strs);
    let firstStr, nextStr;
    for(let i=0; i<strs.length; i++){
        firstStr = strs[0].slice(0,2);
        if(strs[i + 1].length == strs[i].length)
            nextStr = strs[i + 1].slice(0,2);
        
        if(firstStr == nextStr){
            return firstStr
        }
        else
            return ""
    }
};

var strs =["ab", "a"];

const result = longestCommonPrefix(strs);
console.log(result);
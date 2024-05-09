function lengthOfLongestSubstring(s) {
    var arr = []; var count = 0; var isSubString = false; var n = s.length -1;
    //console.log("string is: ",s);
    for(let i = 0; i< s.length; i++){
        var preEle = s[i - 1];
        if(s[i] == preEle){
            isSubString = true;
            arr.pop()
            if(!(n == i)){
                count = 0;
            }
        }
        else{
            isSubString = false
        }
        
        //console.log(s[i]);
        if(!arr.includes(s[i]) && (isSubString == false)){
            arr.push(s[i])
            count++;
        }
    }
    console.log(count)
    return count
};

const s = "bbbbb";
console.log(lengthOfLongestSubstring(s));
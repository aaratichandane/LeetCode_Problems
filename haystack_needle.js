function strStr(haystack, needle) {
    var firstFoundEle; 
    for(let i = 0, j=0; i< haystack.length, j< needle.length; i++, j++){
        if(haystack[i] == needle[i]){
            if(firstFoundEle == undefined || firstFoundEle == null){
                firstFoundEle = i;
            }
        }
        else return haystack.indexOf(needle);
    }
    return haystack.indexOf(needle);
    
}

console.log(strStr("hello","ll"))


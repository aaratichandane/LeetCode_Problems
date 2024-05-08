function lengthOfLastWord(s){
    var n = s.split(" ");
    console.log("******************", n[n.length -1].length);
    if(n[n.length -1].length == 0){
        for(let i= n.length -1; i >= 0; i--){
            if(n[i].length != 0){
                return  n[i].length;
            }
            else
            continue
        }
    }
    else
    return n[n.length - 1].length;
};

var word = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(word));
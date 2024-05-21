function findSubstring (s, words) {
    var formedWord= [], formedWordArr =[]; var visit=0;
    for(let i=0; i< words.length; i++ ){
        for(let j = 0; j< words.length; j++){
            if(words[i] != words[j]){
                formedWord.push( words[i] + words[j]);
                if(formedWord[0] == words.length * words[i].length){
                    if(s.includes(formedWord[visit])){
                        formedWordArr.push(s.indexOf(formedWord[visit]));
                        visit++;
                    }
                }
            }
        }
    }
    console.log(formedWord);
    console.log(formedWordArr);
    return formedWordArr;
};

var s = "barfoothefoobarman", words = ["foo","bar"];
console.log(findSubstring(s, words))
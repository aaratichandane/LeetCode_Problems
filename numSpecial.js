var numSpecial = function(mat) {
    for(let i =0; i<= mat.length; i++){
        for(let j =0; j<= mat.length; j++){
            if(i != j){
                console.log(mat[i], mat[j])
            }
         
        }
    }
};

const mat = [[1,0,0],[0,0,1],[1,0,0]];
console.log(numSpecial(mat))
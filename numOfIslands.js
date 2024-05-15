var numIslands = function(grid) {
    let lastInd;

    for(let i=0; i<grid.length; i++){
        for(let j= 0; j<=grid.length; j++){
            if(grid[i][j] == 0){
                lastInd = j;
                console.log(lastInd)
            }
        }
    }
};

var Input = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  console.log(numIslands(Input))
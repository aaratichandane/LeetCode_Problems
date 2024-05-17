var removeDuplicates = function(nums) {
   var count =0;
   var visitedEle =[];
   for(let i=0; i<nums.length;i++){
        if(!visitedEle.includes(nums[i])){
            visitedEle.push(nums[i])
            count++;
        }
        
   }
    return visitedEle;
};

var nums = [1,1,2];
console.log(removeDuplicates(nums));
var twoSum = function (nums, target){
    var n = nums.length;
    var map = new Map();

    for(let i =0; i<n; i++){
        var remaining = target - nums[i];
        if(map.has(remaining)){
           return map.get(remaining)
        }
        map.set(i,remaining);
    }
    
    return;
}

const nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target))                                                                                                                               
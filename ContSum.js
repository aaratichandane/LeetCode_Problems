function continuousSubArrayForSumIndex(arr, sum){
    let size = arr.length -1, tempArr =[], tempSum = 0, iterateCount = 0;
    for(let i=0; i<= arr.length;){
        if(tempSum == sum){
            return tempArr;
        }
        else if(tempSum <= sum && arr[i] + tempSum <= sum ){
            tempSum += arr[i]; 
            tempArr.push(i);
            i++;
        }
        else{
            iterateCount++;
            i = iterateCount;
            tempArr = [];
            tempSum = 0;
            continue;
        }
      
    }
    return {
        msg: "No continous array found"
    }
}

const arr =[1,2,3,5,-3,10], sum = 15;
console.log(continuousSubArrayForSumIndex(arr, sum));


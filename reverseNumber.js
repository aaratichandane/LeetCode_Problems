function reverse(x) {
     let myFunc = num => Number(num); 
    var intArr = Array.from(String(x), myFunc); 

    var revArr = [];
    for(let i = intArr.length -1 ; i >= 0; i--){
        revArr.push(intArr[i]);
    }
    return concatenateNumbers(revArr)
    return revArr;
};
function concatenateNumbers(numbers) {
    return numbers.join('');
  }

var x = 123;
const result = reverse(x);
console.log(result)
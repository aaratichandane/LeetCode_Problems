function plusOne(digits) {
    var sum = "0";
    for(let i=0; i< digits.length;i++){
        sum = sum + + digits[i]
        if(i == digits.length -1){
            var number = parseInt(sum) + 1;
            const digits = String(number)
            .split('')
            .map(Number);
            return digits;
        }
    
    }
   
};

var digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(plusOne(digits));
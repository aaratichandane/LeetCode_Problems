function addTwoNumbers(l1, l2) {
        var sum = [];
        var num1 = 0,num2 = 0, addition = 0;
        for(let i = 0; i< l1.length && i< l2.length ; i++){
                addition = l1[i] + l2[i];
                if(addition < 9){
                    sum.push(addition); 
                }
                else{
                    var digits = addition.toString().split('');
                    num1 = digits[0];
                    num2 = digits[1];
                    sum.push(num2);
                    l1[i + 1] += Number(num1);
                }
                console.log(sum);
            
        }
        return sum
    };

const l1 = [2,4,3], l2 = [5,6,4];
console.log(addTwoNumbers(l1,l2));

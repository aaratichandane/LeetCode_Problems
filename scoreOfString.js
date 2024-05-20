function scoreOfString(s) {
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return score;
}


let string1 = "hello";
console.log(`Score of '${string1}':`, scoreOfString(string1)); // Output: 13
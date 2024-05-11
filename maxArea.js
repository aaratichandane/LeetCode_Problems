var maxArea = function (height) {

    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;

        max = Math.max(max, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height));
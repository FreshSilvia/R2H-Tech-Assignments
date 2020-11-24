'use strict'
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2



//Make a function 
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]; 
    }
    return sum / arr.length;
};

console.log(average([1,4,7]));


//Second way of doing the same problem
function average(nums) {
    return nums.reduce((a,b) => (a + b)) / nums.length;
}

console.log(average([10,10,10]));


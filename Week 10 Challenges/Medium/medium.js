// // Make an array function
function find(nums , target) {
    // for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(target) === -1) {
            return -1;
        } else { //if (nums.indexOf(target) > -1 ) {
            return nums.indexOf(target);
        };
    // };
};

//Examples
var nums = [4,5,6,7,0,1,2];

// find(nums, 5);
console.log(find(nums, 5));



//Better Version of first situation
function find(nums , target) {

    return nums.indexOf(target);
   
};

//Examples
var nums = [4,5,6,7,0,1,2];

console.log(find(nums, 2));
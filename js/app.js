// Bubble sorter
let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
do {
    let swapped = false;
    for (let i = 0; i < nums.length; i++) {
        // do stuff
        if (nums[i + 1] < nums[i]) { // 5 < 10
            let temp = num[i];
            num[i] = nums[i + 1];
            nums[i + 1] = temp;
            swapped = true;
        }
    }
} while (swapped);
console.log(nums);
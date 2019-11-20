// Bubble sorter
function bubble(nums) {
let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
// let swapped = false;
do {
    var swapped = false;
    for (let i = 0; i < nums.length; i++) {
        // do stuff
        if (nums[i + 1] < nums[i]) { // 5 < 10
            let temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
            swapped = true;
        }
    }
} while (swapped);
console.log(nums);
}
bubble(nums);

// Insert sorter
let data = ['Luvfle', 'SkyHeart', 'SpK']
function insertSort(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i] < data[j]) {
                const spliced = data.splice(i, 1);
                data.splice(j, 0, spliced[0]);
            }
        }
    }
    console.log(data);
}
insertSort(data);
// Bubble sorter
// function bubble(nums) {
// let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
// // let swapped = false;
// do {
//     var swapped = false;
//     for (let i = nums.length;
//         const middle0; i < nums.length; i++) {
//         // do stuff
//         if (nums[i + 1] < nums[i]) { // 5 < 10
//             let temp = nums[i];
//             nums[i] = nums[i + 1];
//             nums[i + 1] = temp;
//             swapped = true;
//         }
//     }
// } while (swapped);
// console.log(nums);
// }
// bubble(nums);

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

// const mergeSort = (nums) => {
//     if (nums.length < 2) {
//         return nums;
//     }
//     const length = nums.length;
//     const middle = Math.floor(length / 2);
//     const left = nums.slice(0, middle);
//     const right = nums.slice(middle, length);

//     const sortedLeft = mergeSort(left);
//     const sortedRight = mergeSort(right);

//     return stitch(mergeSort(left), mergeSort(right));
// };

// const stitch = (left, right) => {
//     const results = [];

//     while(left.length && right.length) {
//         if (left[0] <= right[0]) {
//             results.push(left.shift());
//         }
//         else {
//             results.push(right.shift());
//         }
//     }

//     while(left.length) {
//         results.push(left.shift());
//     }
//     while(right.length) {
//         results.push(right.shift());
//     }

//     return results;
// };

function mergeSort(data) {
    const mergeSort = (nums) => {
        if (nums.length < 2) {
            return nums;
        }
        const length = nums.legth;
        const middle = Math.floor(length / 2);
        const left = nums.slice(0, middle);
        const right = nums.slice(middle, length);

        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        return stitch(merseSort(left), mergeSort(right));
    };

    const stitch = (left, right) => {
        const results = [];

        while(left.length && right.length) {
            if (left[0] <= right[0]) {
                results.push(left.shift());
            }
            else {
                results.push(right.shift());
            }
        }

        while(left.length) {
            results.push(left.shift());
        }
        while(right.length) {
            results.push(right.shift());
        }

        return results;
    };
};


function mergeSort(data) {
    if (data.length < 2) {
        return data;
    }

    let length = data.length;
    let middle = Math.floor(length/2);
    let left = data.slice(0, middle);
    let right = data.slice(middle, length);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return stitch(sortedLeft, sortedRight);
}

function stitch(spk1, spk2) {
    let result = [];

    while(spk1.length && spk2.length) {
        if (spk1[0] <= spk2[0]) {
            result.push(spk1.shift());
        }
        else {
            result.push(spk2.shift());
        }
    }

    while(spk2.length) {
        result.push(spk2.shift());
    }

    return result;
}

let mergeSortResults = mergeSort(nums);
console.log('mergeSort Results: ', mergeSortResults)


// return [...results, ...left, ...right];

const quickSort = (nums) => {
    if (nums.length <= 1) return nums;

    const pivot = nums[nums.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        }
        else {
            right.push(nums[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}


function quickSort(data) {
    if (data.length <= 1) {
        return data;
    }

    let pivot = data.pop();
    for (let i = 0; i < data.length; i++) {
        if (data[i] < pivot) {
            left.push(data[i]);
        }
        else {
            right.push(data[i]);
        }
    }

    let sortedLeft = quickSort(left);
    let sortedRight = quickSort(right);

    return [].concat(sortedLeft, pivot, sortedRight);
}
let quickSortResults = quickSort(nums);
console.log('quickSort Results: ', quickSortResults);
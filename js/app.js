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

    const pivot = nums.pop[nums.length - 1];
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

class LinkedList {
    constructor() {
      this.tail = this.head = null;
      this.length = 0;
    }
    push(value) {
      const node = new Node(value);
      this.length++;
      if (!this.head) {
       this.head = node;
      }
      else {
        this.tail.next = node;
      }
      this.tail = node;
    }
    pop() {
      if (!this.head) return null;
      if (this.head === this.tail) {
        const node = this.head;
        this.head = this.tail = null;
        return node.value;
      }
      const penultimate = this._find(null, (value, nodeValue, i, current) => current.next === this.tail );
      const ans = penultimate.next.value;
      penultimate.next = null;
      this.tail = penultimate;
      this.length--;
      return ans;
    }
    _find(value, test=this.test) {
      let current = this.head;
      let i = 0;
      while(current) {
        if (test(value, current.value, i, current)) {
          return current;
        }
        current = current.next;
        i++;
      }
      return null;
    }
    get(index) {
      const node = this._find(index, this.testIndex);
      if (!node) return null;
      return node.value;
    }
    delete(index) {
      if (index === 0) {
        const head = this.head;
        if (head) {
          this.head = head.next;
        }
        else {
          this.head = null;
        }
        this.length--;
        return head.value;
      }
      
      const node = this._find(index-1, this.testIndex);
      const excise = node.next;
      if (!excise) return null;    
      node.next = excise.next;    
      if (!node.next.next) this.tail = node.next;
      this.length--;
      return excise.value;
    }
    test(search, nodeValue) {
      return search === nodeValue;
    }
    testIndex(search, __, i) {
      return search === i;
    }
    serialize() {
      const ans = [];
      let current = this.head;
      if (!current) return ans;
      while (current) {
        ans.push(current.value);
        current = current.next;
      }
      return ans;
    }
  }
  
class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop(value) {
        return this.pop(this.length - 1);
    }
    get(index) {
        return this.data[index];
    }
    delete(index) {
        const ans = this.data[index];
        this._collapseTo(index);
        return ans;
    }
    _collapseTo(index) {
        for (let i = index; i < Array.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    print () {
        donsole.log(this.data);
    }
}  

let arrayList = new ArrayList();
arrayList.push(2);
arrayList.push(5);
arrayList.push(7);

arrayList.print();

let temp = arrayList.pop();
console.log(temp);
arrayList.print();
arrayList.push(8);
arrayList.push(12);
arrayList.push(13);
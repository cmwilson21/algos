// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place, do not return anything from your function.
// const duplicateZeros = (arr) => {
//   let i = 0;
//   while (i < arr.length) {
//     {
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//           arr.splice(i + 1, 0, 0);
//           arr.pop();
//           i++;
//         }
//       }
//     }
//   }
// }

const duplicateZeros = function(arr) {
  for(let i=0; i < arr.length; i++) {
      if (arr[i] === 0) {
         arr.splice(i, 0, 0);
          i = i + 1;
          arr.pop();
      }
  }
};

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};


// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums

const runningSum = function(nums) { 
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
}



// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
const buildArray = function(nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(i + 1);
    ans.push(nums[i]);
  }
  return ans;
}

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
const shuffle = function(nums, n) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(nums[i]);
    ans.push(nums[i + n]);
  }
  return ans;
}


// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

const kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

const kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map(candy => candy + extraCandies >= max);
}


// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

const smallerNumbersThanCurrent = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

const smallerNumbersThanCurrent = function(nums) {
  return nums.map((num, i) => nums.filter(n => n < num).length);
}

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

const restoreString = function(s, indices) {
  let result = '';
  for (let i = 0; i < indices.length; i++) {
    result += s[indices[i]];
  }
  return result;
}

// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
const checkIfExist = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] * 2) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

// Given an integer x, return true if x is palindrome integer.
const isPalindrome = function(x) {
  let str = x.toString();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

const removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

const eval = function(operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === '++X') {
      x++;
    } else if (operations[i] === '--X') {
      x--;
    }
  }
  return x;
}

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
const isAnagram = function(s, t) {
  let stringS = s.split('').sort().join();
  let stringT = t.split('').sort().join();
  if (stringS === stringT){
      return true
  } else {
      return false
  }
}

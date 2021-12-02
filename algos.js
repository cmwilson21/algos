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
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
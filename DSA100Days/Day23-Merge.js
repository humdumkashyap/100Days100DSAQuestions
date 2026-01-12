//merge

var merge = function (nums1, m, nums2, n) {
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
  console.log(nums1);
  return nums1;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);



// function merge(nums1, m, nums2, n){
    
//     let len=m+n
//     let j=n-1
//     console.log(nums1.length)
    
//     if (m!=0){
//     for (let i=nums1.length-1; i>=0 ;i--){
//         if(nums1[i]==0 && j>=0){
//             nums1[i]=nums2[j]
//             j--
            
//         }
//     }
//     }else{
//         for (let i=nums1.length-1; i>=0 ;i--){
//         if(nums1[i]==0){
//             nums1[i]=nums2[j]
//             j--
//         }
//     }
//     }
//     console.log(nums1.sort())
//     return nums1.sort()

    
// }
// merge(nums1, 55, nums2, 99)

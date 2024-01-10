// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"

function addStrings(num1, num2) {
    let res = [];
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) sum += num1[i--] - '0';
        if (j >= 0) sum += num2[j--] - '0';
        res.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    if (carry) res.push(carry);
    console.log(res.reverse().join(''))
    return res.reverse().join('');
}

addStrings("11", "123")
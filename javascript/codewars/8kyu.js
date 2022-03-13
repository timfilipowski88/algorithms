"use strict";
/*
Count of positives / sum of negatives

Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Steps
#1 sort through array to decided whether it is empty, null, or whether each item is positive or negative.
#2 If positive add +1 to a positive counter
#3 If negative add value to a total negative counter
#4 Return positive counter and total negative counter as an array.
*/

const sample1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const sample2 = [0, 0]

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) {
    return [];
  } else {
    let postiveCounter = 0;
    let totalNegativeCounter = 0;
    for (let i = 0; i < input.length; i++) {
      console.log(i);
      if (input[i] > 0) {
        postiveCounter += 1;
        console.log(postiveCounter);
      } else {
        totalNegativeCounter += input[i];
        console.log(totalNegativeCounter);
      }
    }
    return [postiveCounter, totalNegativeCounter];
  }
}

console.log(countPositivesSumNegatives(sample1));
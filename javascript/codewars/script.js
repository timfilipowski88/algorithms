"use strict";

/*
7 kyu
Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/

/* Solution
let friends = ["Ryan", "Kieran", "Jason", "Yous"];
console.log(friends);

const fourFriends = function (arr) {
  let fourFriends = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 4) {
      fourFriends.push(arr[i]);
    }
  }
  return fourFriends;
};

fourFriends(friends);

*/

/*
8kyu
Counting Sheep...
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

>>> My Solution 

let sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      counter += 1;
    }
  }
  return counter;
}

console.log(countSheeps(sheeps));

*/

/*
8kyu
Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

>>> My Solution 

let integers = [34, 15, 88, 2];

function smallestIntegerFinder(args) {
  let counter = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < counter) {
      counter = args[i];
    }
  }
  return counter;
}

console.log(smallestIntegerFinder(integers));
*/

/*
7 kyu
Complementary DNA
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
*/

let DNAStrand = function (dna) {
  let match = [];
  for (let i = 0; i < dna.length; i++) {
    switch (i) {
      case "A":
        match.push("T");
        break;
      case "T":
        match.push("A");
        break;
      case "G":
        match.push("C");
        break;
      case "C":
        match.push("G");
        break;
      default:
        match.push("not a valid letter");
    }
  }
  return match;
};

let sample1 = ["A", "T", "G", "C"];
console.log(DNAStrand(sample1));

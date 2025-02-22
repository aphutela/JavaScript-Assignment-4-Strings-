// // Q1. Count Characters
// // You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of
// // character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.
// // Note: You have to complete countCharacters function. No need to take any input.

// // Soln:

function count_a_and_d(s) {
  let count_a = 0;
  let count_d = 0;
  for (let c of s) {
    if (c === "A") {
      count_a += 1;
    }
    if (c === "D") {
      count_d += 1;
    }
  }
  return [count_a, count_d];
}

console.log(count_a_and_d("AbaDd"));

// // Q2. Count the Heads
// // Tina is given a string S which contains the first letter of all the student names in her class. She got a curiosity to check how
// // many people have their names starting from the same alphabet. So given a string S, she decided to write a code that finds
// // out the count of characters that occur more than once in the string.
// // Note: You have to complete Count Head function. No need to take any input.

// // Soln:

function unique_first_letters(s) {
  let map = {};
  for (let c of s) {
    map[c] = (map[c] || 0) + 1;
  }
  for (let key in map) {
    if (map[key] > 1) {
      console.log(key, map[key]);
    }
  }
}
unique_first_letters("prepbytes");

// // Q3. You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the
// // given string.
// // Note: You have to complete Count_Vowel function. No need to take any input.

// // Soln:

function Count_Vowel(s) {
  let cnt = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let c of s) {
    c = c.toLowerCase();
    if (vowels.includes(c)) {
      cnt += 1;
    }
  }
  return cnt;
}
console.log(Count_Vowel("Prepbytes"));

// // Q4. Concatenate the Strings
// // You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the
// // concatenation of both the given strings.
// // Note: You have to complete Concatenate_Strings function. No need to take any input

// // Soln:

function Concatenate_Strings(s1, s2) {
  let s3 = s1.concat(s2);
  return s3;
}

console.log(Concatenate_Strings("Hello ", "World!"));

// Q5. Find Length
// You are given a string S, and your task is to return the length of the string S.
// Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input.

// Soln:

function find_len(s) {
  let cnt = 0;
  for (c of s) {
    cnt += 1;
  }
  return cnt;
}

console.log(find_len("Ansh"));

// Q6. Find the Winner
// You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya
// and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which
// player wins the maximum number of games or there is a draw between them.
// Note: You have to complete Game_Winner function. No need to take any input.

// Soln:

function Game_Winner(S) {
  let cnt_a = 0;
  let cnt_d = 0;
  for (let c of S) {
    if (c === "A") {
      cnt_a++;
    } else {
      cnt_d++;
    }
  }
  if (cnt_a > cnt_d) {
    console.log("Aditya");
  } else if (cnt_d > cnt_a) {
    console.log("Danish");
  } else {
    console.log("Draw!");
  }
}
Game_Winner("ADDAAADDDDD");
Game_Winner("ADDAAADD");

// Q7. == Q4.

// Q8. Plaindrome Check
// You are given a string S, Your task is to check wether the given string is a Palindrome or not.
// A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain
// both upppercase lowercase letters.
// Note: You have to complete Plain_Check function. No need to take any input

// Soln:

function Palindrome_check(S) {
  let l = 0;
  let r = S.length - 1;
  while (l < r) {
    if (S[l] === S[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(Palindrome_check("Naman"));
console.log(Palindrome_check("naman"));

// Q9. Reverse the String
// You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters. Note: You have to
// complete Reverse_String function. No need to take any input.

// Soln:

function Reverse_String(S) {
  let a = S.split(" ");
  a = a.toReversed();
  let ans = a.join(" ");
  return ans;
}

console.log(Reverse_String("Ansh Phutela"));

// Q10. Match the Strings
// You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.
// Note: You have to complete String_Match function. No need to take any input.

// Soln:

function String_Match(S1, S2) {
  let a = S1 === S2;
  return a;
}

console.log(String_Match("Prepbytes", "Prepbytes"));

// Q11. String Replace
// You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.
// Note: You have to complete Replace function. No need to take any input

// Soln:

function Replace(S1, S2, S3) {
  let res = S1.replace(S2, S3);
  return res;
}

console.log(Replace("Hi, I am You.", "You", "Prepbytes"));

// Q12. Split the String
// You are given a string S, Your task is to split the string with respect to spaces.
// Note: You have to complete Split_the_String function. No need to take any input.

// Soln:

function Split_the_String(S) {
  let a = S.split(" ");
  return a;
}

console.log(Split_the_String("I am utkarsh raj"));

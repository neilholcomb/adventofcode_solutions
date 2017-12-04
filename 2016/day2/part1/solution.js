import fs from 'fs'

/*
--- Day 2: Bathroom Security ---

You arrive at Easter Bunny Headquarters under cover of darkness. However, you left in such a rush that you forgot to use the bathroom! Fancy office buildings like this one usually have keypad locks on their bathrooms, so you search the front desk for the code.

"In order to improve security," the document you find says, "bathroom codes will no longer be written down. Instead, please memorize and follow the procedure below to access the bathrooms."

The document goes on to explain that each button to be pressed can be found by starting on the previous button and moving to adjacent buttons on the keypad: U moves up, D moves down, L moves left, and R moves right. Each line of instructions corresponds to one button, starting at the previous button (or, for the first line, the "5" button); press whatever button you're on at the end of each line. If a move doesn't lead to a button, ignore it.

You can't hold it much longer, so you decide to figure out the code as you walk to the bathroom. You picture a keypad like this:

1 2 3
4 5 6
7 8 9
Suppose your instructions are:

ULL
RRDDD
LURDL
UUUUD
You start at "5" and move up (to "2"), left (to "1"), and left (you can't, and stay on "1"), so the first button is 1.
Starting from the previous button ("1"), you move right twice (to "3") and then down three times (stopping at "9" after two moves and ignoring the third), ending up with 9.
Continuing from "9", you move left, up, right, down, and left, ending with 8.
Finally, you move up four times (stopping at "2"), then down once, ending with 5.
So, in this example, the bathroom code is 1985.

Your puzzle input is the instructions from the document you found at the front desk. What is the bathroom code?
*/

export const solution1 = inputPath => {
  function moveFinger(key, direction) {
    // 1 2 3
    // 4 5 6
    // 7 8 9
    switch (direction) {
      case 'U':
        return key <= 3 ? key : key - 3 //if we are on the first row stay put...otherwise move up a row
      case 'D':
        return key >= 7 ? key : key + 3 //if we are on the last row stay put...otherwise move down a row
      case 'L':
        return key % 3 === 1 ? key : key - 1
      case 'R':
        return key % 3 === 0 ? key : key + 1
    }
  }

  let currentKey = 5
  return fs
    .readFileSync(inputPath, 'utf-8')
    .split('\n')
    .map(row => {
      currentKey = [...row].reduce(moveFinger, currentKey)
      return currentKey
    })
    .join('')
}

//one liner solution
//prettier-ignore
export const golf = i=>{let c=5;return fs.readFileSync(i,'utf-8').split('\n').map(r=>{c=[...r].reduce((k,d)=>{switch(d){case'U':return k<=3?k:k-3;case'D':return k>=7?k:k+3;case'L':return k%3===1?k:k-1;case'R':return k%3===0?k:k+1;}},c);return c}).join``}

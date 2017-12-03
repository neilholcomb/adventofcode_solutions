/*
You're standing in a room with "digitization quarantine" written in LEDs along one wall. The only door is locked, but it includes a small interface. "Restricted Area - Strictly No Digitized Users Allowed."

It goes on to explain that you may only leave by solving a captcha to prove you're not a human. Apparently, you only get one millisecond to solve the captcha: too fast for a normal human, but it feels like hours to you.

The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.

For example:

1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
1111 produces 4 because each digit (all 1) matches the next.
1234 produces 0 because no digit matches the next.
91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
*/

export const solution1 = function(captcha) {
  /* Solution 1 is a verbose, fairly easy to read solution to the problem */

  let solution = 0

  for (let i = 0; i < captcha.length; i++) {
    let current = captcha.charAt(i)
    let next = captcha.charAt(i + 1)

    if (i + 1 === captcha.length) {
      next = captcha.charAt(0)
    }

    if (current === next) {
      solution = solution + parseInt(current)
    }
  }

  return solution
}

export const solution2 = function(captcha) {
  /*
    lets see if we can solve this without using a for loop.
    I personally do not like for loops, and much prefer
    functional solutions like .map() or .reduce()


    in order to use reduce, we need to work with an array
    using split('') we can break up a string of chars
    into an array of chars
  */
  captcha = captcha.split('')

  //our reducer function
  const solver = function(
    accumulator,
    currentValue,
    currentIndex,
    originalArray
  ) {
    let current = originalArray[currentIndex]
    let next = originalArray[currentIndex + 1]

    if (currentIndex + 1 === originalArray.length) {
      next = originalArray[0]
    }

    if (current === next) {
      accumulator = accumulator + parseInt(current)
    }

    return accumulator
  }

  //solution starts with 0
  const initialValue = 0

  //no use a reducer on our array to get the result...I find this easier to read then for loops but to each their own
  return captcha.reduce(solver, initialValue)
}

/*
some notes about this final example
instead of array.split('') I have used ES6 spread operator...  [...stringInput]

instead of parseInt(value) to convert the string into an int...
I have used Double bitwise NOT (~~) ~~string
read a good explanation here https://j11y.io/cool-stuff/double-bitwise-not/
parseInt is safer, but for this example it works perfect and is the most compact solution I could come up with
*/
//prettier-ignore
export const solution3 = x => [...x].reduce((a,c,i,o)=>c==(i+1==o.length?o[0]:o[i+1])?a+~~c:a,0)

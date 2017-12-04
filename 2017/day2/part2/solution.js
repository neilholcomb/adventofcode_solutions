import fs from 'fs'

/*
--- Part Two ---

"Great work; looks like we're on the right track after all. Here's a star for your effort."
However, the program seems a little worried. Can programs be worried?

"Based on what we're seeing, it looks like all the User wanted is some information about
the evenly divisible values in the spreadsheet. Unfortunately, none of us are equipped for that kind of calculation - 
most of us specialize in bitwise operations."

It sounds like the goal is to find the only two numbers in each row where one evenly divides the other -
that is, where the result of the division operation is a whole number.
They would like you to find those numbers on each line, divide them, and add up each line's result.

For example, given the following spreadsheet:

5 9 2 8
9 4 7 3
3 8 6 5
In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.
In the second row, the two numbers are 9 and 3; the result is 3.
In the third row, the result is 2.
In this example, the sum of the results would be 4 + 3 + 2 = 9.

What is the sum of each row's result in your puzzle input?
*/

export const solution1 = inputPath => {
  //get the raw data from the file...this is tab separated with unix line delimiters
  let data = fs.readFileSync(inputPath, 'utf-8')

  //split the loaded data into arrays of rows. where each row is an array of numbers
  data = data.split('\n').map(line => line.split('\t').map(num => +num))

  // lets map each row into its checksum value
  // start by sorting so that we always divide larger numbers by a smaller number
  data = data.map(row => {
    row = row.sort((a, b) => a - b)
    let numerator, divisor

    do numerator = row.pop()
    while (!(divisor = row.find(c => numerator % c === 0)))
    return {
      numerator,
      divisor
    }
  })

  //last step compute the files checksum by adding up each rows diff calc
  return data.reduce((a, { numerator, divisor }) => a + numerator / divisor, 0)
}

//one liner solution
//prettier-ignore
export const golf = i=>fs.readFileSync(i,'utf-8').split('\n').map(l=>l.split('\t').map(n=>+n)).map(r=>r.sort((a,b)=>a-b)).map(r=>{let n,d;do n=r.pop();while(!(d=r.find(c=>n%c===0)));return{n,d}}).reduce((a,{n,d})=>a+(n/d),0)

/*
--- Part Two ---

Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

For example:

) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.
What is the position of the character that causes Santa to first enter the basement?
*/

export const solution1 = puzzle => {
  puzzle = puzzle.split('').map(step => {
    if (step === '(') {
      return 1
    }

    if (step === ')') {
      return -1
    }
  })

  const answer = puzzle.reduce(
    (accumulator, step) => {
      accumulator.floor += step
      accumulator.step += 1

      if (!accumulator.basement && accumulator.floor < 0) {
        accumulator.basement = accumulator.step
      }
      return accumulator
    },
    {
      floor: 0,
      step: 0,
      basement: false
    }
  )

  return answer.basement
}

//prettier-ignore
export const golf = i=>[...i].reduce((a,v,i)=>({f:a.f+(v==='('?1:-1),b:a.f<0&&!a.b?i:a.b}),{f:0}).b

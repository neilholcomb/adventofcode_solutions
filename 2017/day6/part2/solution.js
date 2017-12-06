import fs from 'fs'

/*
--- Part Two ---

Out of curiosity, the debugger would also like to know the size of the loop:
starting from a state that has already been seen, how many block redistribution
cycles must be performed before that same state is seen again?

In the example above, 2 4 1 2 is seen again after four cycles, and so the answer in that example would be 4.

How many cycles are in the infinite loop that arises from the configuration in your puzzle input?
*/

export const solution1 = input => {
  let seen = { [input.join(':')]: true }
  let duplicateFound = 0
  let length = input.length - 1
  let steps = 0
  let duplicate = ''

  while (duplicateFound < 2) {
    if (duplicateFound > 0) {
      steps++
    }

    let largest = [...input].sort((a, b) => a - b).pop()
    let index = input.findIndex(i => i === largest)
    input[index] = 0

    for (var i = largest; i > 0; i--) {
      index += 1

      if (index > length) index = 0

      input[index] += 1
    }

    let hash = input.join(':')

    if (duplicateFound === 0 && seen[hash]) {
      duplicateFound += 1
      seen = {}
      duplicate = hash
    } else {
      seen[hash] = true
    }

    if (duplicateFound === 1 && seen[duplicate]) {
      duplicateFound += 1
    }

    if (steps >= 30000) {
      duplicateFound = 2
    }
  }

  return steps
}

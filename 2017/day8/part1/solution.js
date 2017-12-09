import fs from 'fs'

/*
--- Day 8: I Heard You Like Registers ---
You receive a signal directly from the CPU.
Because of your recent assistance with jump instructions,
it would like you to compute the result of a series of unusual register instructions.

Each instruction consists of several parts: the register to modify,
whether to increase or decrease that register's value, the amount by which to increase or decrease it,
and a condition. If the condition fails, skip the instruction without modifying the register.
The registers all start at 0. The instructions look like this:

b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10
These instructions would be processed as follows:

Because a starts at 0, it is not greater than 1, and so b is not modified.
a is increased by 1 (to 1) because b is less than 5 (it is 0).
c is decreased by -10 (to 10) because a is now greater than or equal to 1 (it is 1).
c is increased by -20 (to -10) because c is equal to 10.
After this process, the largest value in any register is 1.

You might also encounter <= (less than or equal to) or != (not equal to).
However, the CPU doesn't have the bandwidth to tell you what all the registers are named, and leaves that to you to determine.

What is the largest value in any register after completing the instructions in your puzzle input?
*/
export const solution1 = inputPath => {
  let parser = /^([a-z]+) (inc|dec) (-?\d+) if ([a-z]+) (!=|>|>=|==|<|<=) (-?\d+)$/
  let comparisons = {
    '!=': (a, b) => a !== b,
    '>': (a, b) => a > b,
    '>=': (a, b) => a >= b,
    '==': (a, b) => a === b,
    '<': (a, b) => a < b,
    '<=': (a, b) => a <= b
  }

  let registers = {}

  function getValue(name) {
    return registers[name] || 0
  }

  let data = fs
    .readFileSync(inputPath, 'utf-8')
    .trim()
    .split('\n')
    .map(line => {
      let [
        _,
        var1,
        direction,
        changeAmount,
        var2,
        operator,
        comparisonAmount
      ] = parser.exec(line)

      if (comparisons[operator](getValue(var2), +comparisonAmount)) {
        registers[var1] =
          direction === 'inc'
            ? getValue(var1) + +changeAmount
            : getValue(var1) - +changeAmount
      }
    })

  const largest = Object.keys(registers).reduce(function(a, b) {
    return registers[a] > registers[b] ? a : b
  })

  return registers[largest]
}

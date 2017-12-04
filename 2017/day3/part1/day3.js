/*
--- Day 3: Spiral Memory ---

You come across an experimental new kind of memory stored on an infinite two-dimensional grid.

Each square on the grid is allocated in a spiral pattern starting at a location marked 1 and then counting up while spiraling outward. For example, the first few squares are allocated like this:

17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ...
While this is very space-efficient (no squares are skipped), requested data must be carried back to square 1 (the location of the only access port for this memory system) by programs that can only move up, down, left, or right. They always take the shortest path: the Manhattan Distance between the location of the data and square 1.

For example:

Data from square 1 is carried 0 steps, since it's at the access port.
Data from square 12 is carried 3 steps, such as: down, left, left.
Data from square 23 is carried only 2 steps: up twice.
Data from square 1024 must be carried 31 steps.
How many steps are required to carry the data from the square identified in your puzzle input all the way to the access port?foot of slack, for a total of 43 square feet.
All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?
*/

// solution copied from https://gist.github.com/cranderveldt/a2995c2aae8f66b539139e9725908888
export const solution1 = input => {
  let factor = 1

  // Increase the size of our box until we find an odd perfect square larger than our input
  while (factor * factor < input) {
    factor += 2
  }

  // Next odd perfect square
  let next_perfect_square = factor * factor

  // Length of one side is deceptive because corners are included on two sides, so we subtract 1
  let length_of_one_side = factor - 1

  // Steps it takes to get from any corner to any middle number
  let steps_from_corner_to_middle = length_of_one_side / 2

  // Steps from our input to the next perfect square
  let steps_to_perfect_square = next_perfect_square - input

  // Which side are we on? 0 = bottom, 1 = left, 2 = top, 3 = right
  let side = Math.floor(steps_to_perfect_square / length_of_one_side)

  // The value of the closest middle on our outer edge
  let closest_edge_middle =
    next_perfect_square -
    length_of_one_side * side -
    steps_from_corner_to_middle

  // And the number of steps it takes to get to that edge middle
  let steps_to_closest_edge_middle = Math.abs(closest_edge_middle - input)

  // Solution is number of parallel steps + perpendicular steps
  return steps_to_closest_edge_middle + steps_from_corner_to_middle
}

// solution copied from https://gist.github.com/cranderveldt/a2995c2aae8f66b539139e9725908888
export const solution2 = input => {
  let factor = 1

  while (factor * factor < input) {
    factor += 2
  }

  return (
    Math.abs(
      factor * factor -
        (factor - 1) * Math.floor((factor * factor - input) / (factor - 1)) -
        (factor - 1) / 2 -
        input
    ) +
    (factor - 1) / 2
  )
}

//solution found on https://www.reddit.com/r/adventofcode/comments/7h7ufl/2017_day_3_solutions
export const solution3 = n => {
  let root = Math.ceil(Math.sqrt(n))
  let curR = root % 2 !== 0 ? root : root + 1
  let numR = (curR - 1) / 2
  let cycle = n - (curR - 2) ** 2
  let innerOffset = cycle % (curR - 1)

  return numR + Math.abs(innerOffset - numR)
}

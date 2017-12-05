import fs from 'fs'

/*
--- Day 3: Squares With Three Sides ---

Now that you can think clearly, you move deeper into the labyrinth of hallways
and office furniture that makes up this part of Easter Bunny HQ.
This must be a graphic design department; the walls are covered in specifications for triangles.

Or are they?

The design document gives the side lengths of each triangle it describes,
but... 5 10 25? Some of these aren't triangles. You can't help but mark the impossible ones.

In a valid triangle, the sum of any two sides must be larger than the remaining side.
For example, the "triangle" given above is impossible, because 5 + 10 is not larger than 25.

In your puzzle input, how many of the listed triangles are possible?
*/

export const solution1 = inputPath => {
  let answer = fs
    .readFileSync(inputPath, 'utf-8')
    .split('\n')
    .map(triangle => [
      parseInt(triangle.substr(0, 5), 10),
      parseInt(triangle.substr(5, 10), 10),
      parseInt(triangle.substr(10, 15), 10)
    ])
    .reduce((p, cur, i) => {
      ;(p[(i / 3) | 0] = p[(i / 3) | 0] || []).push(cur)
      return p
    }, [])
    .map(group => [
      [group[0][0], group[1][0], group[2][0]],
      [group[0][1], group[1][1], group[2][1]],
      [group[0][2], group[1][2], group[2][2]]
    ])
    .reduce((a, group) => {
      a.push(group[0])
      a.push(group[1])
      a.push(group[2])
      return a
    }, [])

    .reduce((accumulator, sides) => {
      let isTriangle =
        sides[0] + sides[1] > sides[2] &&
        sides[1] + sides[2] > sides[0] &&
        sides[0] + sides[2] > sides[1]

      return isTriangle ? (accumulator += 1) : accumulator
    }, 0)

  return answer
}

import path from 'path'
import * as solutions from './solution'

//get absolute path to our input
let testinput = [0, 2, 7, 0]
let testsolution = 4

let input = [0, 5, 10, 0, 11, 14, 13, 4, 11, 8, 8, 7, 1, 4, 12, 11]
let solution = 1695

describe('2017 Day 6 part 2 solutions', () => {
  it('should work with solution 2', () => {
    expect(solutions.solution1(testinput)).toEqual(testsolution)
  })

  it('should work with solution 1', () => {
    expect(solutions.solution1(input)).toEqual(solution)
  })
})

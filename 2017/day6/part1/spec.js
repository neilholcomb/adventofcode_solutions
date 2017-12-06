import path from 'path'
import * as solutions from './solution'

//get absolute path to our input
let testinput = [0, 2, 7, 0]
let testsolution = 5

let input = [0, 5, 10, 0, 11, 14, 13, 4, 11, 8, 8, 7, 1, 4, 12, 11]
let solution = 7864

describe('Day 1 solutions', () => {
  it('should work with solution 1', () => {
    expect(solutions.solution1([...testinput])).toEqual(testsolution)
  })

  it('should work with solution 1', () => {
    expect(solutions.solution1([...input])).toEqual(solution)
  })

  it('should work with golf solution', () => {
    expect(solutions.golf([...input])).toEqual(solution)
  })
})

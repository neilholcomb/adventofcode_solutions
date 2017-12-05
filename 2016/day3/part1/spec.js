import path from 'path'
import * as solutions from './solution'

//get absolute path to our input
let inputPath = path.join(__dirname, 'input.txt')

let solution = 862

describe('Day 1 solutions', () => {
  it('should solve with test data', () => {
    expect(solutions.solution1(inputPath)).toEqual(solution)
  })

  it('should work with golf solution', () => {
    expect(solutions.golf(inputPath)).toEqual(solution)
  })
})

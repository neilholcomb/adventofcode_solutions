import path from 'path'
import * as solutions from './solution'

//get absolute path to our input
let inputPath = path.join(__dirname, 'input.txt')

let solution = 1577

describe('2016 Day 3 part 2 solutions', () => {
  it('should solve with test data', () => {
    expect(solutions.solution1(inputPath)).toEqual(solution)
  })
})

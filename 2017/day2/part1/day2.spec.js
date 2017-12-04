import path from 'path'
import * as solutions from './day2'

//get absolute path to our input
let inputPath = path.join(__dirname, 'input.txt')

let solution = 45972

describe('Day 1 solutions', () => {
  it('should work with solution 1', () => {
    expect(solutions.solution1(inputPath)).toEqual(solution)
  })

  it('should work with solution 2', () => {
    expect(solutions.solution2(inputPath)).toEqual(solution)
  })
})

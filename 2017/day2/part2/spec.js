import path from 'path'
import * as solutions from './solution'

//get absolute path to our input
let inputPath = path.join(__dirname, 'input.txt')

let solution = 326

describe('Day 1 solutions', () => {
  it('should work with solution 1', () => {
    expect(solutions.solution1(inputPath)).toEqual(solution)
  })

  it('should work with golf solution', () => {
    expect(solutions.golf(inputPath)).toEqual(solution)
  })
})

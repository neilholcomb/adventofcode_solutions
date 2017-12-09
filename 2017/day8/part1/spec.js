import path from 'path'
import * as solutions from './solution'

//get absolute path to our input
let testinput = path.join(__dirname, 'test.txt')
let testsolution = 1

let inputPath = path.join(__dirname, 'input.txt')
let solution = 3745

describe('2017 Day 8 part 1 solutions', () => {
  it('should work with solution 1 and test input', () => {
    expect(solutions.solution1(testinput)).toEqual(testsolution)
  })

  it('should work with solution 1 and real input', () => {
    expect(solutions.solution1(inputPath)).toEqual(solution)
  })

  // it('should work with golf solution', () => {
  //   expect(solutions.golf([...input])).toEqual(solution)
  // })
})

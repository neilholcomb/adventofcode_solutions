import path from 'path'
import * as solutions from './solution'

//get absolute path to our input
let inputPath = path.join(__dirname, 'input.txt')

let solution = '78985'

describe('2016 Day 2 part 1 solutions', () => {
  it('should solve with test data', () => {
    const input = path.join(__dirname, 'test.txt')
    expect(solutions.solution1(input)).toEqual('1985')
  })

  it('should work with solution 1', () => {
    expect(solutions.solution1(inputPath)).toEqual(solution)
  })

  it('should work with golf solution', () => {
    expect(solutions.golf(inputPath)).toEqual(solution)
  })
})

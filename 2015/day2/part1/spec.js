import * as solutions from './solution'
import path from 'path'

//get absolute path to our input
let inputPath = path.join(__dirname, 'input.txt')
const answer = 1586300

describe('2015 Day 2 part 1 solutions', () => {
  it('should work with solution 1', () => {
    expect(solutions.solution1(inputPath)).toEqual(answer)
  })

  it('should work with solution 2', () => {
    expect(solutions.solution2(inputPath)).toEqual(answer)
  })
})

import path from 'path'
import * as solutions from './solution'

describe('Day 1 solutions', () => {
  it('should work with solution 1 with test data', () => {
    let inputPath = path.join(__dirname, 'test.txt')

    let solution = 10

    expect(solutions.solution1(inputPath)).toEqual(solution)
  })

  it('should work with solution 1 with real data', () => {
    let inputPath = path.join(__dirname, 'input.txt')
    let solution = 28178177

    expect(solutions.solution1(inputPath)).toEqual(solution)
  })

  it('should work with golf solution', () => {
    let inputPath = path.join(__dirname, 'input.txt')
    let solution = 28178177

    expect(solutions.golf(inputPath)).toEqual(solution)
  })
})
